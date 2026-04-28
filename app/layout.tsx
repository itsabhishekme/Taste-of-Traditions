import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tasteoftraditions.in"),

  title: {
    default: "Taste of Traditions | Lost Recipes & Cloud Kitchen",
    template: "%s | Taste of Traditions",
  },

  description:
    "Discover lost Indian recipes and order authentic homemade food from our cloud kitchen. Bringing tradition back to your plate.",

  keywords: [
    "Taste of Traditions",
    "lost recipes India",
    "cloud kitchen India",
    "homemade food delivery",
    "traditional Indian food",
    "Bihari recipes",
    "authentic Indian cuisine",
  ],

  authors: [{ name: "Taste of Traditions Team" }],
  creator: "Taste of Traditions",
  publisher: "Taste of Traditions",

  openGraph: {
    title: "Taste of Traditions",
    description:
      "Reviving lost Indian recipes and delivering authentic homemade food.",
    url: "https://tasteoftraditions.in",
    siteName: "Taste of Traditions",
    images: [
      {
        url: "/og-image.jpg", // add inside /public
        width: 1200,
        height: 630,
        alt: "Taste of Traditions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Taste of Traditions",
    description:
      "Authentic Indian food & lost recipes brought back to life.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}