"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerCarousel(payload: CAROUSEL_BANNER) {
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
          {payload.map((item) => (
            <img src={item.name} alt="" className="object-fill" />
          ))}
        </Slider>
      </section>
    </>
  );
}
