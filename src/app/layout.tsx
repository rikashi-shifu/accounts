import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accounts",
  description: "A personal accounting tool to manage financial transactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex bg-[#222831] overflow-hidden max-h-screen min-h-screen`}
      >
        <Navigation />
        <main className="ml-[240px] py-6 pe-6 w-full">
          <div className="bg-[#eeeeee] rounded-3xl h-full p-8">
            <div className="h-full">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
