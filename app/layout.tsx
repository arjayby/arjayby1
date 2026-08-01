import type { Metadata } from "next";
import { GeistPixelSquare } from "geist/font/pixel";
import { JetBrains_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arjay | Software Developer",
  description: "Software developer and product builder portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        jetBrainsMono.variable,
        GeistPixelSquare.variable,
      )}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
