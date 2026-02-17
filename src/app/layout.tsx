import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reviews Booster | Управление репутацией через Reviews.io",
  description:
    "Помогаем бизнесу управлять репутацией через Reviews.io: легально, чисто и с гарантией результата. Отзывы, которые работают на вас 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="linear">
      <body className={`${dmSerif.variable} ${dmSans.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
