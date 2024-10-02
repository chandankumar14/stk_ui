"use client";
import AspectLayout from "@/components/layout/_aspect_layout";
import Image from "next/image"
import MostSellingProduct from "@/components/carousel/_most_selling";
import BannerCarousel from "@/components/carousel/_banner_carousel";

export default function Home() {

  return (
    <>
      <main className="py-20 sm:py-20 md:py-20 ">
        <BannerCarousel />
        <AspectLayout />
        <section className="mt-4">
          <div
            className="relative 
        font-sans before:absolute
         before:w-full
         before:h-full before:inset-0
          before:bg-black before:opacity-50 
          before:z-10"
          >
            <Image
              src="https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/5/05_7.jpg"
              alt="Banner Image"
              width={500}
              height={500}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div
              className="min-h-[360px] relative z-50 h-full max-w-6xl
       mx-auto flex flex-col justify-center items-center text-center
        text-white p-6"
            >
              <h2 className="sm:text-4xl text-2xl font-bold mb-6">
                Explore the World
              </h2>
              {/* <p className="sm:text-lg text-base text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p> */}

              <button
                type="button"
                className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        </section>
        <section className="mt-4">
          <div className="font-sans">
            <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-gray-100">
              <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
                <h2 className="text-gray-800 lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
                  Elevate Your Experience with Modern Elegance
                </h2>
                <p className="text-gray-800 mt-6 text-base leading-relaxed">
                  Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim
                  nulla officia ea sit deserunt. Eu eu quis anim aute Laboris
                  qui Lorem ad tempor ut reprehenderit.
                </p>
                <button
                  type="button"
                  className="bg-transparent border-2 border-gray-800 mt-12 transition-all text-gray-800 font-bold text-sm rounded-md px-6 py-2.5"
                >
                  Get Started
                </button>
              </div>

              <div className="lg:h-[480px] flex items-center">
                <Image
                  src="https://media.samyakk.com/pub/media/wysiwyg/codilar/Lehenga-saga/image_6.png"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  alt="Dining Experience"
                />
              </div>
            </div>


          </div>
        </section>
        <section>
          <MostSellingProduct />
        </section>
      </main>
    </>
  );
}
