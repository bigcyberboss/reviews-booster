import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { LangProvider } from "@/components/LangContext";
import "./globals.css";

const dmSansHeading = DM_Sans({
  weight: ["500", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Review Boosters | Reputation Management via Reviews.io",
  description:
    "We help businesses manage their reputation on Reviews.io: legally, cleanly and with guaranteed results. Reviews that work for you 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSansHeading.variable} ${dmSans.variable} font-body antialiased`}
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
