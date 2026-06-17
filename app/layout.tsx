import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";

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
        <Loader />
        <PageTransition />
        <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  );
}