"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const product = {
    name: 'Basic Tee 6-Pack ',
    price: '$192',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',

    sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
    ],
}
const SlideData = [
    { name: "	https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/3/03_14.jpg" },
    { name: "	https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/5/05_7.jpg" },
    { name: "	https://media.samyakk.com/pub/media/magestore/bannerslider/images//0/4/04_11.jpg" }
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
};
export default function PageDetails() {

    return (
        <>
            <main className="mt-24 bg-slate-50 ">

                <section className='grid lg:grid-cols-5 sm:grid-cols-1 md:grid-cols-1 gap-4 px-4'>
                    <div className="lg:col-span-3 ">
                        <div className="overflow-hidden rounded-lg bg-gray-100">
                            <img src={SlideData[0].name} alt={product.imageAlt}
                                className="object-cover object-center h-80" />
                        </div>
                    </div>
                    <div className="lg:col-span-2 ">
                        <div className="sm:col-span-8 lg:col-span-7">
                            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>
                            <section aria-labelledby="information-heading" className="mt-2">
                                <p className="text-2xl text-gray-900">{product.price}</p>
                            </section>

                            <section className="w-full h-32 overflow-hidden">
                                <Slider {...settings}>
                                    {SlideData.map((item) => (
                                        <img src={item.name} alt="" className="object-fill px-2" />
                                    ))}
                                </Slider>
                            </section>
                            <section aria-labelledby="options-heading" className="mt-0">
                                <h2>Feature</h2>
                                <ol>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                                </ol>

                                <form>
                                    <button
                                        type="submit"
                                        className="mt-6 flex w-full items-center justify-center rounded-md
                             border border-transparent bg-green-600 px-8 py-3 text-base 
                             font-medium text-white hover:bg-green-600-700 focus:outline-none
                              focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Buy Now
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                </section>

                <section className='mt-0 divide-x-2 divide-blue-100 divide-dashed grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2'>
                    <div className='py-2 divide-y  divide-dashed'>
                        <h1 className='text-xl font-semibold text-center'>Description</h1>
                        <p className='px-2 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ex quae. Maxime amet, blanditiis sequi dolore consequatur aliquam animi non similique reprehenderit molestiae! Nam, veniam doloremque nostrum vel delectus ipsam.</p>
                    </div>
                    <div className='py-2 divide-y  divide-dashed'>
                        <h1 className='text-xl font-semibold text-center py-2'>Details</h1>
                        <p className='px-2 py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, laudantium?</p>
                    </div>
                    <div className='py-2 divide-y  divide-dashed'>
                        <h1 className='text-xl font-semibold text-center py-2'>Dimention</h1>
                        <p className='px-2 py-2'>Height</p>
                        <p className='px-2 py-2'>Weight</p>
                    </div>

                </section>
            </main>

        </>
    )
}