import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Made Local Co. — Find Local Makers Near You",
    template: "%s | Made Local Co.",
  },
  description:
    "Connecting passionate makers with conscious consumers. Type your zip code, find what you're looking for, meet the person who made it.",
  keywords: [
    "local makers",
    "artisan",
    "handmade",
    "farmers market",
    "local goods",
    "buy local",
    "craftsmen",
  ],
  openGraph: {
    title: "Made Local Co.",
    description:
      "Find local artisans, craftsmen, and farmers near you. One search, local results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${sourceSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
