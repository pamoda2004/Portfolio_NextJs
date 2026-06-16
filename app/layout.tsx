import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Pamoda Jayathilaka | Portfolio",
  description: "Modern portfolio website built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <Header />
        {children}
      </body>
    </html>
  );
}