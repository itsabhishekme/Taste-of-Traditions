import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

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

    // Brand Keywords
    "Taste of Traditions",
    "Taste of Traditions India",
    "Taste of Traditions Kitchen",
    "Taste of Traditions Foods",
    "Taste of Traditions Recipes",
    "Taste of Traditions Meals",
    "Taste of Traditions Delivery",
    "Taste of Traditions Homemade",
    "Taste of Traditions Cloud Kitchen",
    "Taste of Traditions Catering",
    "Taste of Traditions Restaurant",
    "Taste of Traditions Cuisine",
    "Taste of Traditions Heritage",
    "Taste of Traditions Authentic",
    "Taste of Traditions India Menu",

    // Traditional Indian Food
    "Traditional Indian Food",
    "Authentic Indian Cuisine",
    "Indian Home Cooking",
    "Regional Indian Cuisine",
    "Indian Traditional Recipes",
    "Indian Comfort Food",
    "Heritage Recipes",
    "Classic Indian Dishes",
    "Traditional Indian Meals",
    "Indian Family Recipes",
    "Indian Village Food",
    "Indian Culinary Heritage",
    "Old Indian Recipes",
    "Regional Indian Food",
    "Indian Food Culture",
    "Traditional Indian Cooking",
    "Indian Food Heritage",
    "Authentic Indian Meals",
    "Indian Grandma Recipes",
    "Indian Festival Food",

    // Lost Recipes
    "Lost Recipes India",
    "Forgotten Indian Recipes",
    "Ancient Indian Recipes",
    "Rare Indian Dishes",
    "Traditional Family Recipes",
    "Heirloom Recipes",
    "Old Family Recipes",
    "Traditional Cooking Methods",
    "Forgotten Flavors",
    "Vintage Indian Cooking",
    "Regional Heritage Recipes",
    "Ancient Food Traditions",
    "Traditional Kitchen Secrets",
    "Reviving Indian Recipes",
    "Preserving Culinary Heritage",

    // Homemade Food
    "Homemade Food",
    "Home Cooked Meals",
    "Fresh Homemade Food",
    "Homestyle Cooking",
    "Healthy Homemade Meals",
    "Traditional Home Cooking",
    "Authentic Homemade Food",
    "Home Kitchen Meals",
    "Daily Meal Delivery",
    "Fresh Indian Meals",
    "Nutritious Home Food",
    "Wholesome Indian Food",
    "Home Style Lunch",
    "Home Style Dinner",
    "Healthy Indian Cooking",
    "Comfort Food India",
    "Freshly Cooked Meals",
    "Made with Love",
    "Handcrafted Meals",
    "Family Style Cooking",

    // Cloud Kitchen
    "Cloud Kitchen India",
    "Online Food Delivery",
    "Food Delivery Service",
    "Virtual Restaurant",
    "Cloud Restaurant",
    "Online Kitchen",
    "Kitchen Delivery",
    "Fresh Food Delivery",
    "Meal Delivery India",
    "Order Homemade Food",
    "Healthy Meal Delivery",
    "Traditional Food Delivery",
    "Indian Tiffin Service",
    "Home Chef Delivery",
    "Kitchen to Home",
    "Freshly Prepared Meals",
    "Food Delivery App",
    "Cloud Kitchen Business",
    "Online Restaurant India",
    "Local Food Delivery",

    // Bihari Cuisine
    "Bihari Recipes",
    "Bihari Cuisine",
    "Traditional Bihari Food",
    "Authentic Bihari Dishes",
    "Bihar Food Culture",
    "Litti Chokha",
    "Sattu Recipes",
    "Dal Pitha",
    "Bihari Kadhi",
    "Bihari Mutton Curry",
    "Champaran Mutton",
    "Bihari Kebabs",
    "Thekua",
    "Khaja",
    "Malpua",
    "Bihari Desserts",
    "Village Style Bihar Food",
    "Maithili Cuisine",
    "Bhojpuri Cuisine",
    "Magahi Cuisine",

    // Regional Indian Cuisine
    "North Indian Food",
    "South Indian Food",
    "East Indian Cuisine",
    "West Indian Cuisine",
    "Bengali Cuisine",
    "Punjabi Food",
    "Gujarati Cuisine",
    "Rajasthani Food",
    "Maharashtrian Cuisine",
    "Kashmiri Cuisine",
    "Awadhi Cuisine",
    "Hyderabadi Cuisine",
    "Chettinad Cuisine",
    "Goan Cuisine",
    "Odia Cuisine",
    "Assamese Cuisine",
    "Manipuri Cuisine",
    "Traditional Regional Recipes",
    "Indian State Specialties",
    "Regional Food Stories",

    // Meal Categories
    "Breakfast Recipes",
    "Indian Breakfast",
    "Lunch Meals",
    "Dinner Recipes",
    "Vegetarian Food",
    "Vegan Indian Food",
    "Traditional Thali",
    "Festival Special Food",
    "Street Food India",
    "Healthy Indian Recipes",
    "Seasonal Indian Dishes",
    "Weekend Specials",
    "Family Meals",
    "Comfort Meals",
    "Homestyle Thali",

    // Catering & Services
    "Home Catering",
    "Event Catering",
    "Corporate Lunch",
    "Office Meal Delivery",
    "Party Food Catering",
    "Wedding Catering",
    "Birthday Catering",
    "Bulk Food Orders",
    "Family Catering",
    "Festival Catering",
    "Traditional Catering",
    "Authentic Indian Catering",
    "Meal Subscription",
    "Daily Tiffin Service",
    "Corporate Catering",

    // Healthy & Organic
    "Healthy Indian Food",
    "Organic Ingredients",
    "Farm Fresh Ingredients",
    "Natural Cooking",
    "Preservative Free Food",
    "Fresh Ingredients",
    "Balanced Diet Meals",
    "Wholesome Cooking",
    "Traditional Nutrition",
    "Ayurvedic Food",
    "Millet Recipes",
    "Seasonal Ingredients",
    "Local Ingredients",
    "Slow Cooked Food",
    "Nutritious Meals",

    // Food Culture
    "Indian Food Heritage",
    "Food Traditions",
    "Culinary Traditions",
    "Traditional Cooking",
    "Indian Culinary Arts",
    "Food Stories",
    "Recipes Passed Down",
    "Generational Recipes",
    "Family Kitchen",
    "Village Recipes",
    "Cultural Cuisine",
    "Authentic Flavors",
    "Traditional Ingredients",
    "Indian Spice Blends",
    "Heritage Cooking",

    // SEO & Commercial
    "Best Homemade Food Delivery",
    "Best Cloud Kitchen India",
    "Traditional Indian Food Online",
    "Order Bihari Food Online",
    "Authentic Indian Food Delivery",
    "Healthy Homemade Meals",
    "Regional Indian Food Delivery",
    "Indian Comfort Food Delivery",
    "Cloud Kitchen Near Me",
    "Indian Meal Delivery",
    "Fresh Home Cooked Food",
    "Best Indian Cuisine",
    "Traditional Recipes India",
    "Homestyle Indian Kitchen",
    "Premium Homemade Food"
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
        url: "/og-image.jpg",
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
        <Analytics />
      </body>
    </html>
  );
}