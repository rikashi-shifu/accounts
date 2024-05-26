import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accounts",
  description: "A digital accounting tool to manage financial transactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen max-h-screen">
        <Layout />
        <main className="bg-[#fbfbfb] w-full flex justify-center items-center h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
