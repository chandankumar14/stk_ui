"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SlideData = [
  {
    name: "https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/3/03_14.jpg",
  },
  {
    name: "https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/5/05_7.jpg",
  },
  {
    name: "https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/4/04_11.jpg",
  },
];
export default function BannerCarousel() {
  const CarouselConfig = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <section className="max-w-full py-5 overflow-hidden mt-12 lg:h-96 sm:h-52">
        <Slider {...CarouselConfig}>
          {SlideData.map((item: any) => (
            <img src={item.name} alt="" key={item.name} className="object-fill" />
          ))}
        </Slider>
      </section>
    </>
  );
}
