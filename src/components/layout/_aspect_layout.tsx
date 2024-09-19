"use client";
import { useRouter } from 'next/navigation';
import Image from "next/image"
import Link from "next/link"
const product = {
  images: [
    {
      src: "https://media.samyakk.com/pub/media/catalog/product/cache/82acd5018dc36bd4507bcad5faafe971/s/r/sr26938_1.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://media.samyakk.com/pub/media/wysiwyg/codilar/Lehenga-saga/image_7.png",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://media.samyakk.com/pub/media/wysiwyg/codilar/Lehenga-saga/image_6.png",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "	https://media.samyakk.com/pub/media/sarees/cro_occ_3.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
};
export default function AspectLayout() {
  
  return (
    <>
      <section>
        <h2 className="text-base font-semibold leading-7 text-center">
          Shop by Occasion
        </h2>
        <div
          className="mx-auto mt-3 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl 
                lg:grid-cols-3 lg:gap-x-8 lg:px-2"
        >
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
           <Link href="/product_list">
           <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              width={400}
              height={400}
              className="h-full w-full object-cover object-center cursor-pointer"
              
            />
           </Link>
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg"
           >
              <Link href="/product_list">
              <Image
                src={product.images[1].src}
                alt={product.images[1].alt}
                width={400}
                height={400}
                className="h-full w-full object-cover object-center cursor-pointer"
              />
              </Link>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg"
            >
              <Link href="/product_list">
              <Image
                src={product.images[2].src}
                alt={product.images[2].alt}
                width={400}
                height={400}
                className="h-full w-full object-cover object-center cursor-pointer"
              />
              </Link>
            </div>
          </div>
          <div  
          className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <Link href="/product_list">
            <Image
              src={product.images[3].src}
              alt={product.images[3].alt}
              width={400}
                height={400}
              className="h-full w-full object-cover object-center cursor-pointer"
            />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
