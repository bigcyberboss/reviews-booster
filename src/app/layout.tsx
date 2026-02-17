import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { LangProvider } from "@/components/LangContext";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
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
  title: "Reviews Booster | Reputation Management via Reviews.io",
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
        className={`${dmSerif.variable} ${dmSans.variable} font-body antialiased`}
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
