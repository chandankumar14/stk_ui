
function OrderDetails() {
    return (
        <>
            <div className="font-sans bg-neutral-100 p-8 tracking-wide max-lg:max-w-2xl mx-auto py-[200px]">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="space-y-4 text-center lg:sticky top-8">
                        <div className="bg-gray-100 p-4 flex items-center sm:h-[380px] rounded-lg">
                            <img src="https://readymadeui.com/images/product14.webp" alt="Product"
                                className="w-full max-h-full object-contain object-top" />
                        </div>
                    </div>

                    <div className="max-w-xl">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-800">Dark blue sneakers with white laces</h2>
                        </div>

                        <div className="mt-2">
                            <ul className="flex border-b">
                                <li
                                    className="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-yellow-400 cursor-pointer transition-all">
                                    Description</li>

                            </ul>

                            <div className="mt-8">
                                <h3 className="text-lg font-bold text-gray-800">Product Description</h3>
                                <p className="text-sm text-gray-600 mt-4">Step up your footwear game with our premium mens shoes. Designed for comfort and crafted with a contemporary aesthetic, these versatile shoes are a must-have addition to your wardrobe. The supple and breathable materials ensure all-day comfort, making them perfect for everyday wear.</p>
                            </div>

                            <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-600">
                                <li>A pair of gray shoes is a wardrobe essential due to its versatility.</li>
                                <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
                                <li>Easy to maintain, they can be machine-washed and dried on low heat.</li>
                                <li>Personalize them with your own designs patterns or embellishments to make them uniquely yours.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-end max-w-screen-lg mx-auto py-[60px] ">
                    <div className="w-full">
                        <h6 className="text-base font-bold text-green-500 mb-2 mr-4">Ordered</h6>
                        <div className="flex items-center w-full">
                            <div
                                className="w-8 h-8 shrink-0 mx-[-1px] border-2 border-green-500 p-1.5 flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-green-500" viewBox="0 0 24 24">
                                    <path
                                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <div className="w-full h-1 bg-green-500"></div>
                        </div>
                    </div>
                    <div className="w-full">
                        <h6 className="text-base font-bold text-green-500 mb-2 mr-4">Shipped</h6>
                        <div className="flex items-center w-full">
                            <div
                                className="w-8 h-8 shrink-0 mx-[-1px] border-2 border-green-500 p-1.5 flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-green-500" viewBox="0 0 24 24">
                                    <path
                                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <div className="w-full h-1 bg-green-500"></div>
                        </div>
                    </div>
                    <div className="w-full">
                        <h6 className="text-base font-bold text-green-500 mb-2 mr-4">Out for Delivery</h6>
                        <div className="flex items-center w-full">
                            <div
                                className="w-8 h-8 shrink-0 mx-[-1px] border-2 border-green-500 p-1.5 flex items-center justify-center rounded-full">
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>
                            <div className="w-full h-1 bg-gray-300"></div>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-base font-bold text-gray-400 w-max mb-2">Delivered</h6>
                        <div className="flex items-center">
                            <div className="w-8 h-8 shrink-0 mx-[-1px] border-2 p-1.5 flex items-center justify-center rounded-full">
                                <span className="text-base text-gray-400 font-bold">4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OrderDetails