import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Normalize so deployed links are absolute (e.g. /portfolio), not relative (portfolio)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+/, "")}`
  : "";

export const metadata: Metadata = {
  title: `${site.name} | ${site.headline}`,
  description: site.valueStatement,
  openGraph: {
    title: `${site.name} | ${site.headline}`,
    description: site.valueStatement,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar basePath={basePath} />
        <main className="flex-1">{children}</main>
        <Footer basePath={basePath} />
      </body>
    </html>
  );
}
