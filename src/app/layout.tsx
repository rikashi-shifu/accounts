import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
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
      <body className={`${inter.className} flex h-screen max-h-screen`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
