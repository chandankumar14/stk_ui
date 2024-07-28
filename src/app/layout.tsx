import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./embla.css"
import Header from "@/components/_header";
import Footer from "@/components/_footer";
import _NaveMegaMenuWithHover from "@/components/_header/_nabbar";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Satika",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <_NaveMegaMenuWithHover /> */}
        {
          children
        }
       <Footer /> 
      </body>
    </html>
  );
}
