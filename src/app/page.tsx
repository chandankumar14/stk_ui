"use client"
import Slider from 'react-slick';
import {Card,CardHeader,CardBody,CardFooter,Typography,Button,} from "@material-tailwind/react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cardlayout from '@/components/layout/_card';
import CheckOut from '@/components/_checkout';


const SlideData = [
  { name: "	https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/3/03_14.jpg" },
  { name: "	https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/5/05_7.jpg" },
  { name: "	https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/4/04_11.jpg" }
]

const product = {
  images: [
    {
      src: "https://media.samyakk.com/pub/media/catalog/product/cache/82acd5018dc36bd4507bcad5faafe971/s/r/sr26938_1.jpg",
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://media.samyakk.com/pub/media/wysiwyg/codilar/Lehenga-saga/image_7.png',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://media.samyakk.com/pub/media/wysiwyg/codilar/Lehenga-saga/image_6.png',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: '	https://media.samyakk.com/pub/media/sarees/cro_occ_3.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],


}
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
        {/* this  is carousel section...*/}
        <section className="max-w-full overflow-hidden lg:h-96 sm:h-52">
          <Slider {...settings}>
            {SlideData.map((item) => (
              <img src={item.name} alt="" className="object-fill" />
            ))}
          </Slider>
        </section>
        {/** this for New Arrival project */}
        <section>
          <div className=" text-center">
            <h2 className="text-base font-semibold leading-7">Ready-to-Ship Styles</h2>
            <hr />
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            < Cardlayout imageValue={product.images[1].src}  />
            < Cardlayout  imageValue={product.images[1].src}/>
            < Cardlayout imageValue={product.images[2].src} />
            < Cardlayout imageValue={product.images[2].src} />
            < Cardlayout  imageValue={product.images[1].src}/>
            < Cardlayout imageValue={product.images[2].src} />
            < Cardlayout imageValue={product.images[2].src} />
            < Cardlayout  imageValue={product.images[1].src}/>
            </div>
          </div>
        </section>

        {/** this for New Occasion project */}
        <section>
          <h2 className="text-base font-semibold leading-7 text-center">Shop by
            Occasion</h2>
          <div className="mx-auto mt-3 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl 
                lg:grid-cols-3 lg:gap-x-8 lg:px-2">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product.images[1].src}
                  alt={product.images[1].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product.images[2].src}
                  alt={product.images[2].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={product.images[3].src}
                alt={product.images[3].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </section>


        <section>
          <div className="bg-slate-200 text-center">
            <h2 className="text-base font-semibold leading-7">Ready-to-Ship Styles</h2>
            <hr />
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            < Cardlayout imageValue={product.images[1].src}  />
            < Cardlayout  imageValue={product.images[1].src}/>
            < Cardlayout imageValue={product.images[2].src} />
            < Cardlayout imageValue={product.images[2].src} />
            </div>
          </div>
        </section>

        <CheckOut />

      </main>

     
    </>
  );
}




