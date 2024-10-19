import Provider from "../Redux/provider"
import store from '../Redux/store'; 
import "./globals.css";
import Footer from "@/components/_footer";
import MenuHeader from "@/components/_header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
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
          <MenuHeader />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
