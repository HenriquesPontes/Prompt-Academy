import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

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
    <html lang="en-US" className={GeistSans.variable}>
      <body className="min-h-screen bg-paper text-ink font-serif antialiased">
        {children}
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
