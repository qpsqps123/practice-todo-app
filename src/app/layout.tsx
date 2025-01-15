import type { Metadata } from "next";
import { Playwrite_VN, Yeon_Sung } from "next/font/google";
import "./globals.css";

export const playwriteVn = Playwrite_VN({
  weight: "400",
  variable: "--font-playwrite-vn",
  display: "swap",
});

export const yeonSung = Yeon_Sung({
  weight: "400",
  variable: "--font-yeon-sung",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Manage List to do",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${yeonSung.variable} antialiased`}>{children}</body>
    </html>
  );
}
