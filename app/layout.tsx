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
  title: "Dusun Gebang",
  description:
    "Dusun Gebang, Kalurahan Ngloro, Kecamatan Saptosari, Kabupaten Gunungkidul",
  icons: {
    icon: "/logo.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
