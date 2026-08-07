import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const TITLE =
  "Prompt Academy — The Ultimate Vibe Coding Guide";
const DESCRIPTION =
  "Master Vibe Coding and AI-assisted development. From beginner to pro, learn how to build modern software with AI.";

export const metadata: Metadata = {
  metadataBase: new URL("https://promptacademy.com"),
  title: { default: TITLE, template: "%s · Prompt Academy" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  applicationName: "Prompt Academy",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Prompt Academy",
    type: "website",
    locale: "en_US",
    images: [{ url: "/meta.png", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/meta.png"],
  },
};

export const viewport: Viewport = { themeColor: "#0a2947" };

const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Prompt Academy",
  description: DESCRIPTION,
  url: "https://promptacademy.com",
  applicationCategory: "EducationalSoftware",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-paper text-ink font-sans antialiased flex flex-col blueprint-grid`}>
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationLd),
          }}
        />
      </body>
    </html>
  );
}
