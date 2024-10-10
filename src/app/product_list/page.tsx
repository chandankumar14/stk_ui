"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux/cartSlice"
import { Subscription } from "rxjs";
import Image from "next/image";
import Link from "next/link";
import { GetProductList } from "../services/_home_page_service";
import { Product } from "@/components/models/_product_model";
import MostSellingProduct from "@/components/carousel/_most_selling";
export default function ProductList() {
 const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>();
  useEffect(() => {
    const subscription: Subscription = GetProductList().subscribe({
      next: (data) => setProducts(data),
      error: (err) => setError("Failed to fetch products"),
    });
    return () => subscription.unsubscribe();
  }, []);

  const addProductIntoCart = (product: Product) => {
    dispatch(addToCart(product));
  }

  return (
    <>
    {/* onClick={() => router.push('/product_details', { scroll: true })} */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-4 2xl:px-64 py-[160px] bg-pink-100">
        <div className="hidden bg-pink-100 px-4 sm:flex  h-64 container">
          <div className="w-2/3 flex flex-col items-center justify-center ">
            <h1 className="text-4xl font-semibold  text-gray-700">
              Grab up to 50% off on
              <br /> Selected Products
            </h1>
            <button className="rounded-3xl bg-lama text-gray-900 w-max py-3 px-5 text-xl outline-1 ">
              Buy Now
            </button>
          </div>
          <div className="relative w-1/3">
            <Image src="/woman.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className="ml-2 bg-white rounded-none">
        <div className="font-[sans-serif] ">
          <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
              {products.map((product) => (
                <div key={product.id}  className="bg-pink-100 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                  <div
                    className=" w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-red-600 inline-block" viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>

                  <Link href="/product_details">
                  <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                    <Image src={product.image}
                      width={200}
                      height={200}
                      alt="Product 1"
                      className="h-full w-full object-contain mix-blend-multiply" />
                  </div>
                  </Link>

                 <Link href="/product_details" >
                 <div>
                    <h3 className="text-lg  text-gray-800">{product?.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h4 className="text-lg text-gray-800 font-bold mt-4">${product?.price}</h4>
                  </div>
                 </Link>
                  <button type="button"
                    onClick={() => addProductIntoCart(product)}
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-500 text-base text-gray-800 font-semibold rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                      <path
                        d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                        data-original="#000000"></path>
                    </svg>
                    Add to cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/** Most Selling Product list  */}
      <MostSellingProduct />
    </>
  );
}
