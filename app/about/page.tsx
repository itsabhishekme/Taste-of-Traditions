import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Taste of Traditions is a cloud kitchen reviving lost Indian recipes and delivering authentic homemade food.",
};

export default function AboutPage() {
  return <AboutClient />;
}