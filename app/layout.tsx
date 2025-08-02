import type { Metadata } from "next";
import { Mulish, Lora } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ngloro Berseri",
  description: "Ngloro berseri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
