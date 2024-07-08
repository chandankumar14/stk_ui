"use client"
const product = {
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],


}

export default function Occasion() {

    return (
        <div className="bg-white">
            <h2 className="text-base font-semibold leading-7 text-center">Shop by
                Occasion</h2>
            <hr />
            <div className="mx-auto mt-3 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl 
                lg:grid-cols-3 lg:gap-x-8 lg:px-8">
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
        </div>
    )
}
