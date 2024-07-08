"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const SlideData = [
{ name: "https://media.samyakk.com/pub/media/wysiwyg/codilar/ReadytoShipStyles/KanchipuramSarees.png" },
]

const EmblaCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
    };

    return (

        <div className="bg-white py-20 sm:py-20 md:py-20 mt-0">
           <Slider {...settings}>
               
                {/* <div className='w-full'>
                {SlideData.map((item) => (
                    <img src={item.name} alt="" />
                  ))}
                </div> */}
                <div>hello</div>
                <div>hle</div>
                <div>hii</div>
               
                
            </Slider>
        </div>
    )


}

export default EmblaCarousel
