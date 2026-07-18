import type { Metadata } from "next";
import { Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Iglesia Hebreos 11",
    "Iglesia Visionaria Hebreos 11",
    "iglesia cristiana",
    "Las Palmas de Herrera",
    "República Dominicana",
    "evangelio",
  ],
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: site.url,
    siteName: site.fullName,
    title: `${site.fullName} — ${site.slogan}`,
    description: site.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.slogan}`,
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
