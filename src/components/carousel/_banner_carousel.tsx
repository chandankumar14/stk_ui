"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
export default function BannerCarousel(payload:any) {
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
      <section className="max-w-full overflow-hidden lg:h-96 sm:h-52">
        <Slider {...CarouselConfig}>
          {payload.map((item:any) => (
            <img src={item.name} alt="" className="object-fill" />
          ))}
        </Slider>
      </section>
    </>
  );
}
