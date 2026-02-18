import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: "Instagram",
  icons: {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>{children}</body>
    </html>
  );
}
