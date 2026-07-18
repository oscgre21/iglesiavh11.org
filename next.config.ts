import type { NextConfig } from "next";

/**
 * Content-Security-Policy pragmática para un sitio estático de contenido.
 * Permite lo que el sitio realmente usa: YouTube (nocookie) y Google Maps
 * embebidos, miniaturas de YouTube. Next.js requiere estilos/scripts inline.
 */
const isDev = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  // React en modo desarrollo requiere eval(); en producción nunca se usa.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://i.ytimg.com https://*.ytimg.com https://*.googleapis.com https://*.gstatic.com",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src https://www.youtube-nocookie.com https://www.youtube.com https://www.google.com https://maps.google.com",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  // Genera un servidor mínimo autocontenido para Docker (.next/standalone).
  output: "standalone",
  // Prisma usa un binario de motor nativo: no debe empaquetarse por el bundler.
  serverExternalPackages: ["@prisma/client", "prisma"],
  poweredByHeader: false, // no revelar "X-Powered-By: Next.js"
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
