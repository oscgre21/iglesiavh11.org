# ─────────────────────────────────────────────────────────────────────────────
#  Iglesia Hebreos 11 — Next.js 16 (App Router) + Prisma (SQLite) · multi-etapa
#  Usa el output "standalone" de Next para una imagen final mínima.
# ─────────────────────────────────────────────────────────────────────────────
ARG NODE_VERSION=22-alpine

# 1) Dependencias ─────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS deps
# openssl + libc6-compat: requeridos por el motor nativo de Prisma en Alpine (musl)
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app
# El esquema debe estar presente: `npm ci` dispara postinstall → `prisma generate`
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm ci

# 2) Build ────────────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS builder
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV DATABASE_URL="file:./data/hebreos11.db"
# build ejecuta "prisma generate && next build"
RUN npm run build
# Hornea el esquema en una base de datos plantilla (crea las tablas).
# Docker sembrará el volumen nuevo con este archivo en el primer arranque.
RUN node ./node_modules/prisma/build/index.js migrate deploy

# 3) Runtime ──────────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS runner
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
# La ruta del archivo SQLite es relativa a prisma/ → /app/prisma/data/hebreos11.db
ENV DATABASE_URL="file:./data/hebreos11.db"

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Artefactos del build standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Cliente Prisma generado + motor de consultas (ligero, sin el CLI)
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/@prisma/client ./node_modules/@prisma/client
# Esquema + migraciones + base de datos plantilla (con el esquema ya aplicado)
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

RUN chown -R nextjs:nodejs /app/prisma

USER nextjs
EXPOSE 3000
# El volumen se siembra con la DB plantilla horneada en la imagen (primer arranque)
VOLUME ["/app/prisma/data"]

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)).then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
