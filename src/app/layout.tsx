import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Preloader from '@/components/ui/Preloader';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PriyanshDubey-Portfolio",
  description: "An portfolio site of Priyansh Dubey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
