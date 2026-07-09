import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";
import ThemeProvider from "@/components/ThemeProvider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextjsportfolio-gray.vercel.app"),
  title: {
    default: "Pamoda Jayathilaka | Frontend Developer",
    template: "%s | Pamoda Jayathilaka",
  },
  description:
    "Modern portfolio of Pamoda Jayathilaka, a frontend developer creating clean and responsive web experiences.",
  icons: {
    icon: "/icons/favicon.jpg",
    shortcut: "/icons/favicon.jpg",
    apple: "/icons/favicon.jpg",
  },
  keywords: [
    "Pamoda Jayathilaka",
    "Frontend Developer",
    "Next.js Portfolio",
    "React Developer",
    "UI Developer",
    "Sri Lanka Developer",
  ],
  authors: [{ name: "Pamoda Jayathilaka" }],
  creator: "Pamoda Jayathilaka",
  openGraph: {
    title: "Pamoda Jayathilaka | Frontend Developer",
    description:
      "Modern portfolio website built with Next.js, Tailwind CSS, Framer Motion, GSAP, and Lenis.",
    url: "https://nextjsportfolio-gray.vercel.app",
    siteName: "Pamoda Jayathilaka Portfolio",
    images: [
      {
        url: "/images/project-1.jpg",
        width: 1200,
        height: 630,
        alt: "Pamoda Jayathilaka Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pamoda Jayathilaka | Frontend Developer",
    description:
      "Modern portfolio website built with Next.js and smooth animations.",
    images: ["/images/project-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.variable}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var savedTheme = localStorage.getItem("theme");

                  if (savedTheme === "light") {
                    document.documentElement.classList.remove("dark");
                  } else {
                    document.documentElement.classList.add("dark");
                  }
                } catch (e) {
                  document.documentElement.classList.add("dark");
                }
              })();
            `,
          }}
        />

        <ThemeProvider>
          <SmoothScroll />
          <Loader />
          <PageTransition />
          <CustomCursor />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}