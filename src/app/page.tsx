"use client";
import AspectLayout from "@/components/layout/_aspect_layout";
import Image from "next/image"
import MostSellingProduct from "@/components/carousel/_most_selling";
import BannerCarousel from "@/components/carousel/_banner_carousel";
import BanarasiSaree from "@/categories/banarasi/banarasi";
import ChanderiSaree from "@/categories/chanderi/chanderi";
export default function Home() {

  return (
    <>
      <main className="py-20 sm:py-20 md:py-20 ">
        <BannerCarousel />
        <AspectLayout />
        <section>
          <MostSellingProduct />
        </section>
        <BanarasiSaree />
        <ChanderiSaree />
      </main>
    </>
  );
}
