import Provider from "../Redux/provider"
import "./globals.css";
import Footer from "@/components/_footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import HeaderSection from "@/components/header";
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
          <HeaderSection/>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
