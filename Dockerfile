# ─────────────────────────────────────────────────────────────────────────────
#  Iglesia Hebreos 11 — Next.js 16 (App Router) · build multi-etapa
#  Usa el output "standalone" de Next para una imagen final mínima.
# ─────────────────────────────────────────────────────────────────────────────
ARG NODE_VERSION=22-alpine

# 1) Dependencias ─────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS deps
# libc6-compat: requerido por algunas dependencias nativas (p. ej. sharp) en Alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
# Instalación reproducible a partir del lockfile
RUN npm ci

# 2) Build ────────────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

# 3) Runtime ──────────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Usuario sin privilegios
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Artefactos del build standalone (servidor + dependencias mínimas)
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

# Healthcheck simple contra la home
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)).then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

# server.js es el punto de entrada que genera el output standalone
CMD ["node", "server.js"]
