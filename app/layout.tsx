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
  "Skribe — The markdown writing app for people who build with AI";
const DESCRIPTION =
  "A Mac-native markdown editor where Claude Code edits your local documents in real time. Free for Mac — forever.";

export const metadata: Metadata = {
  metadataBase: new URL("https://skribe.app"),
  title: { default: TITLE, template: "%s · Skribe" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  applicationName: "Skribe",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Skribe",
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

export const viewport: Viewport = { themeColor: "#ffffff" };

const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Skribe",
  description: DESCRIPTION,
  url: "https://skribe.app",
  applicationCategory: "Productivity",
  operatingSystem: "macOS 13+",
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
