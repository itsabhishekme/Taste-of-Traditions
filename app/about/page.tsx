import type { Metadata } from "next";
import AboutClient from "./AboutClient";

/* ======================================================
   SEO METADATA
====================================================== */

export const metadata: Metadata = {
  title: {
    default: "About Us | Taste Of Traditions",
    template: "%s | Taste Of Traditions",
  },

  description:
    "Taste Of Traditions is a premium Indian cloud kitchen reviving forgotten recipes, authentic homemade meals, and emotional traditional food experiences.",

  keywords: [
    "Indian food",
    "traditional recipes",
    "cloud kitchen",
    "homemade food",
    "Indian thali",
    "authentic Indian cuisine",
    "Taste Of Traditions",
    "Indian restaurant",
    "Indian meals",
    "heritage recipes",
  ],

  authors: [
    {
      name: "Taste Of Traditions",
    },
  ],

  creator: "Taste Of Traditions",

  publisher: "Taste Of Traditions",

  metadataBase: new URL("https://tasteoftraditions.com"),

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Us | Taste Of Traditions",

    description:
      "Discover the story behind Taste Of Traditions — reviving India’s forgotten flavors with authentic homemade recipes and emotional food experiences.",

    url: "https://tasteoftraditions.com/about",

    siteName: "Taste Of Traditions",

    images: [
      {
        url:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1400&auto=format&fit=crop",

        width: 1400,
        height: 900,

        alt: "Taste Of Traditions",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "About Us | Taste Of Traditions",

    description:
      "Authentic Indian homemade food, traditional recipes, and emotional flavors.",

    images: [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1400&auto=format&fit=crop",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "food",
};

/* ======================================================
   PAGE
====================================================== */

export default function AboutPage() {
  return <AboutClient />;
}