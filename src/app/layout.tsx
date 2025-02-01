import type { Metadata } from "next";
import "../styles/global.css";
import { yeonSung } from "@/utils/getFonts";

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
