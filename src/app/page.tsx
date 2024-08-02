"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import BannerCarousel from "@/components/carousel/_banner_carousel";
const SlideData = [
  {
    name: "	https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/3/03_14.jpg",
  },
  {
    name: "	https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/5/05_7.jpg",
  },
  {
    name: "	https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/4/04_11.jpg",
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};
export default function Home() {
  return (
    <>
      <main className="bg-white py-20 sm:py-20 md:py-20 ">
        {/* <section className="max-w-full overflow-hidden lg:h-96 sm:h-52">
          <Slider {...settings}>
            {SlideData.map((item) => (
              <img src={item.name} alt="" className="object-fill" />
            ))}
          </Slider>
        </section> */}

        <BannerCarousel CAROUSEL_BANNER={SlideData}/>

        <section className="max-w-full overflow-hidden lg:h-96 sm:h-52">
          <div className=" text-center">
            <h2 className="text-base font-semibold leading-7">Row Section</h2>
            <hr />
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
             
            </div>
          </div>
         
        </section>

        <section>
          <div className="bg-slate-200 text-center">
            <h2 className="text-base font-semibold leading-7">Spect section</h2>
            <hr />
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"></div>
          </div>
        </section>
      </main>
    </>
  );
}
