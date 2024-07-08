"use client"
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
const product = {
    name: 'Basic Tee 6-Pack ',
    price: '$192',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
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

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Details() {
    const [open, setOpen] = useState(true)
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    return (
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8  sm:px-6 sm:pt-8 md:p-6 lg:p-4">
        <div className="grid w-full grid-cols-1 items-start gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>
                <section aria-labelledby="information-heading" className="mt-2">
                    <p className="text-2xl text-gray-900">{product.price}</p>
                </section>
                <section aria-labelledby="options-heading" className="mt-10">
                    <h3 id="options-heading" className="sr-only">
                        Product options
                    </h3>
                    <form>
                        {/* Colors */}
                        <fieldset aria-label="Choose a color">
                            <legend className="text-sm font-medium text-gray-900">Color</legend>

                            <RadioGroup
                                value={selectedColor}
                                onChange={setSelectedColor}
                                className="mt-4 flex items-center space-x-3"
                            >
                                {product.colors.map((color) => (
                                    <Radio
                                        key={color.name}
                                        value={color}
                                        aria-label={color.name}
                                        className={({ focus, checked }) =>
                                            classNames(
                                                color.selectedClass,
                                                focus && checked ? 'ring ring-offset-1' : '',
                                                !focus && checked ? 'ring-2' : '',
                                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                                            )
                                        }
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                color.class,
                                                'h-8 w-8 rounded-full border border-black border-opacity-10',
                                            )}
                                        />
                                    </Radio>
                                ))}
                            </RadioGroup>
                        </fieldset>

                        {/* Sizes */}
                        <fieldset className="mt-10" aria-label="Choose a size">
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-medium text-gray-900">Size</div>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    Size guide
                                </a>
                            </div>

                            <RadioGroup
                                value={selectedSize}
                                onChange={setSelectedSize}
                                className="mt-4 grid grid-cols-4 gap-4"
                            >
                                {product.sizes.map((size) => (
                                    <Radio
                                        key={size.name}
                                        value={size}
                                        disabled={!size.inStock}
                                        className={({ focus }) =>
                                            classNames(
                                                size.inStock
                                                    ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                    : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                focus ? 'ring-2 ring-indigo-500' : '',
                                                'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1',
                                            )
                                        }
                                    >
                                        {({ checked, focus }) => (
                                            <>
                                                <span>{size.name}</span>
                                                {size.inStock ? (
                                                    <span
                                                        className={classNames(
                                                            checked ? 'border-indigo-500' : 'border-transparent',
                                                            focus ? 'border' : 'border-2',
                                                            'pointer-events-none absolute -inset-px rounded-md',
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                    >
                                                        <svg
                                                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                            viewBox="0 0 100 100"
                                                            preserveAspectRatio="none"
                                                            stroke="currentColor"
                                                        >
                                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                        </svg>
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </Radio>
                                ))}
                            </RadioGroup>
                        </fieldset>

                        <button
                            type="submit"
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                           Buy Now
                        </button>
                    </form>
                </section>
            </div>
        </div>
    </div>
    )
}
