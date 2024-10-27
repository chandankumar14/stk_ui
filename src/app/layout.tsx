import Provider from "../Redux/provider"
import "./globals.css";
import Footer from "@/components/_footer";
import MenuHeader from "@/components/_header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import DemoHeader from "@/components/header1";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Satika",
  description: "Satika Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider >
          <DemoHeader />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
