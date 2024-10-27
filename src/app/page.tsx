"use client";
import BannerCarousel from "@/components/carousel/_banner_carousel";
import MostSellingHeroSection from "@/components/herosection/sale";
import TrendingHeroSection from "@/components/herosection/trending";
import MostPopularHeroSection from "@/components/herosection/popular";
export default function Home() {
  return (
    <>
      <main className="py-4 sm:py-4  md:py-4">
        <BannerCarousel />
        <MostSellingHeroSection />
        <TrendingHeroSection />
        <MostPopularHeroSection />
        </main>
    </>
  );
}
