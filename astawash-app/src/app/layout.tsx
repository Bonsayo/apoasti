import type { Metadata } from "next";
import { Manrope, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const notoEthiopic = Noto_Sans_Ethiopic({
  variable: "--font-ethiopic",
  subsets: ["ethiopic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astawash Healthcare",
  description: "Complete Booking - Astawash",
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${notoEthiopic.variable}`}>
      <body suppressHydrationWarning className="bg-[#f5f7f8] font-display text-slate-900 min-h-screen flex flex-col antialiased">
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" precedence="default" />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
