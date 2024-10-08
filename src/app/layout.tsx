import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@gabp/styles/tailwind-custom.scss";
import Header from "../components/core/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Pinchuck",
  description: "Portfolio of Gabriel Pinchuck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${inter.className}`}>
        <Header />
        {children}
        </body>
    </html>
  );
}
