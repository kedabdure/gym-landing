import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import SmoothScroll from "@/components/landing/SmoothScroll";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IRONFORGE — Premium Fitness Center | Gym, Kickboxing, Aerobics, Taekwondo",
  description:
    "Train at IRONFORGE. Four specialized programs: Gym, Kickboxing, Aerobics, and Taekwondo. Build strength, discipline, and confidence. Register online today.",
  keywords: [
    "gym",
    "kickboxing",
    "aerobics",
    "taekwondo",
    "fitness center",
    "strength training",
    "martial arts",
    "fitness programs",
    "personal fitness",
  ],
  openGraph: {
    title: "IRONFORGE — Premium Fitness Center",
    description:
      "Four programs. One destination. Unlimited potential. Train at IRONFORGE.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRONFORGE — Premium Fitness Center",
    description:
      "Four programs. One destination. Unlimited potential. Train at IRONFORGE.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
