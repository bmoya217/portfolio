import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Branden Moya | Full Stack Developer",
    template: "%s | Branden Moya",
  },
  description:
    "Full stack developer portfolio for Branden Moya, focused on React, TypeScript, GraphQL, billing systems, internal tools, and practical product interfaces.",
  keywords: [
    "Branden Moya",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "GraphQL",
    "Frontend Engineer",
  ],
  authors: [{ name: "Branden Moya" }],
  creator: "Branden Moya",
  openGraph: {
    title: "Branden Moya | Full Stack Developer",
    description:
      "React and TypeScript portfolio covering product UI, backend integrations, billing workflows, geospatial tools, and selected projects.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Branden Moya | Full Stack Developer",
    description:
      "React and TypeScript portfolio covering product UI, backend integrations, billing workflows, geospatial tools, and selected projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />

          <div className="flex-1">{children}</div>

          <Footer />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
