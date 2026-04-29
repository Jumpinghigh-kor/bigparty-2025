import type { Metadata } from "next";
import "../assets/css/globals.css";
import Header from "@/components/Header";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "빅파티2025",
  description: "빅파티2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
