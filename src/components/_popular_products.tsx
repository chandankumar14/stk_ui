"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PopularProducts() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src="https://readymadeui.com/images/product9.webp" alt="Image 1" />
                </div>
                <div>
                    <img src="https://readymadeui.com/images/product9.webp" alt="Image 2" />
                </div>
                <div>
                    <img src="https://readymadeui.com/images/product9.webp" alt="Image 3" />
                </div>
                <div>
                    <img src="https://readymadeui.com/images/product9.webp" alt="Image 4" />
                </div>
            </Slider>
        </>
    )
}