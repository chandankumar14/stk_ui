"use client"
import Image from "next/image"

export default function MostPopularHeroSection() {
    return (
        <>
            <div className="grid md:grid-cols-2 mt-4 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
                <div className="max-md:order-1 max-md:text-center">
                    <h3 className="text-gray-800 md:text-3xl text-2xl md:leading-10">Prompt Delivery and Enjoyable Dining Experience.</h3>
                    <p className="mt-4 text-sm text-gray-600">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
                    <button type="button" className="px-5 py-2.5 mt-8 rounded text-sm outline-none tracking-wide bg-blue-600 text-white hover:bg-blue-700">Explore Shopping</button>
                </div>
                <div className="md:h-[400px]">
                    <Image src="/banner/banner5.jpeg"
                    width={500}
                    height={500} 
                    alt="saatika benner"
                    className="w-full h-full md:object-contain" />
                </div>
            </div>

            <div className="container px-10">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8">
                    <div className="border border-gray-200">
                        <div className="text-center border-b border-gray-200">
                            <Image src="/saree/banarsi/banarsi.jpg"
                                width={500}
                                height={500}
                                alt="Product 1"
                                className="h-full w-full px-2 py-2 object-contain mix-blend-hard-light" />
                        </div>
                        <div className="px-8 py-4">
                            <p className="text-gray-500 text-[14px] font-medium">Headphones</p>
                            <h2 className="font-medium">Gaming Headphone</h2>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="font-medium text-accent text-xl">$40.50</h2>
                                <div className="flex gap-2 items-center cursor-pointer">
                                    <button type="button"
                                        className="w-full flex items-center px-4 py-2 justify-center bg-pink-500 text-sm text-white hover:bg-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-4" width="20px" height="20px" viewBox="0 0 512 512">
                                            <path
                                                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                                data-original="#000000"></path>
                                        </svg>
                                        Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-200">
                        <div className="text-center border-b border-gray-200">
                            <Image src="/saree/Gadwal/gadwal.jpg"
                                width={500}
                                height={500}
                                alt="Product 1"
                                className="h-full w-full px-2 py-2 object-contain mix-blend-hard-light" />
                        </div>
                        <div className="px-8 py-4">
                            <p className="text-gray-500 text-[14px] font-medium">Headphones</p>
                            <h2 className="font-medium">Gaming Headphone</h2>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="font-medium text-accent text-xl">$40.50</h2>
                                <div className="flex gap-2 items-center cursor-pointer">
                                    <button type="button"
                                        className="w-full flex items-center px-4 py-2 justify-center bg-pink-500 text-sm text-white hover:bg-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-4" width="20px" height="20px" viewBox="0 0 512 512">
                                            <path
                                                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                                data-original="#000000"></path>
                                        </svg>
                                        Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-200">
                        <div className="text-center border-b border-gray-200">
                            <Image src="/saree/chanderi/chanderi.jpg"
                                width={500}
                                height={500}
                                alt="Product 1"
                                className="h-full w-full px-2 py-2 object-contain mix-blend-hard-light" />
                        </div>
                        <div className="px-8 py-4">
                            <p className="text-gray-500 text-[14px] font-medium">Headphones</p>
                            <h2 className="font-medium">Gaming Headphone</h2>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="font-medium text-accent text-xl">$40.50</h2>
                                <div className="flex gap-2 items-center cursor-pointer">
                                    <button type="button"
                                        className="w-full flex items-center px-4 py-2 justify-center bg-pink-500 text-sm text-white hover:bg-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-4" width="20px" height="20px" viewBox="0 0 512 512">
                                            <path
                                                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                                data-original="#000000"></path>
                                        </svg>
                                        Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}