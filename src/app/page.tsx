"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AspectLayout from "@/components/layout/_aspect_layout";
import PopularProducts from "@/components/_popular_products";
import Image from "next/image"
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
export default function Home() {
  const CarouselConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <main className="py-20 sm:py-20 md:py-20 ">
        <section className="max-w-full overflow-hidden mt-12 lg:h-96 sm:h-52">
          <Slider {...CarouselConfig}>
            {SlideData.map((item: any) => (
              <img src={item.name} alt="" key={item.name} className="object-fill" />
            ))}
          </Slider>
        </section>
        <section>
          <AspectLayout />
        </section>

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

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-4 my-12">
              <div className="bg-pink-100 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                <div className="bg-pink-400 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>

                <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                  <img
                    src="https://readymadeui.com/images/product9.webp"
                    alt="Product 1"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-gray-800">
                    Sole Elegance
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h4 className="text-lg text-gray-800 font-bold mt-4">$10</h4>
                </div>
              </div>
              <div className="bg-pink-100 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                <div className="bg-pink-400 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>

                <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                  <img
                    src="https://readymadeui.com/images/product9.webp"
                    alt="Product 1"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-gray-800">
                    Sole Elegance
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h4 className="text-lg text-gray-800 font-bold mt-4">$10</h4>
                </div>
              </div>
              <div className="bg-pink-100 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                <div className="bg-pink-400 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>

                <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                  <img
                    src="https://readymadeui.com/images/product9.webp"
                    alt="Product 1"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-gray-800">
                    Sole Elegance
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h4 className="text-lg text-gray-800 font-bold mt-4">$10</h4>
                </div>
              </div>
              <div className="bg-pink-100 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                <div className="bg-pink-400 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>

                <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                  <img
                    src="https://readymadeui.com/images/product9.webp"
                    alt="Product 1"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-gray-800">
                    Sole Elegance
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h4 className="text-lg text-gray-800 font-bold mt-4">$10</h4>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
    </>
  );
}
