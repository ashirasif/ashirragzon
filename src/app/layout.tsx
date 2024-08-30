import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex px-40 mb-12 border-b border-black py-4 justify-between">
          <Link href={"/"}>
            Home
          </Link>
          <Link href={"/cart"}>
            Cart
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
