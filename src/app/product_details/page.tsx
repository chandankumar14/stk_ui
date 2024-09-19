"use client";
export default function productDetails() {
 
  return (
    <>
      <div className="font-sans bg-neutral-100 p-8 tracking-wide max-lg:max-w-2xl mx-auto py-[200px]">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4 text-center lg:sticky top-8">
            <div className="bg-gray-100 p-4 flex items-center sm:h-[380px] rounded-lg">
              <img src="https://readymadeui.com/images/product14.webp" alt="Product"
                className="w-full max-h-full object-contain object-top" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 flex items-center rounded-lg sm:h-[182px]">
                <img src="https://readymadeui.com/images/product12.webp" alt="Product" className="w-full max-h-full object-contain object-top" />
              </div>

              <div className="bg-gray-100 p-4 flex items-center rounded-lg sm:h-[182px]">
                <img src="https://readymadeui.com/images/product9.webp" alt="Product" className="w-full max-h-full object-contain object-top" />
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800">Dark blue sneakers with white laces</h2>
              <p className="text-sm text-gray-600 mt-2">Well-Versed Commerce</p>
            </div>
            <div className="mt-4">
              <h3 className="text-gray-800 text-4xl font-bold">30</h3>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <button type="button" className="min-w-[200px] px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-semibold rounded-lg">Buy now</button>
              <button type="button" className="min-w-[200px] px-4 py-2.5 border border-yellow-400 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-lg">Add to cart</button>
            </div>

            <div className="mt-8">
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
      </div>
    </>
  );
}
