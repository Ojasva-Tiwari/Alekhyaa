import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AALEKHYA Store — Hand Painted Ties Catalogue",
  description:
    "Explore the complete AALEKHYA collection of hand-painted neckwear inspired by music, emotion, and stories.",
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
