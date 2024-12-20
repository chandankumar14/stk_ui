"use client";
import { CartItem, RootState } from "@/components/models/_product_model";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "@/Redux/cartSlice"; // Adjust import path
import Image from "next/image"
import MostSellingProduct from "@/components/carousel/_most_selling";
export default function CartList() {
const dispatch = useDispatch();
// Function to increase quantity of a product
const handleIncrease = (id: string) => {
  dispatch(increaseQty(id));
};
const handleDecrease = (id: string) => {
  dispatch(decreaseQty(id));
};
const handleRemove = (id: string) => {
  dispatch(removeFromCart(id));
}
const ProductList = useSelector((state:RootState) => {
  console.log(state.cart.items)
  return state?.cart?.items || []
});

return (
    <>
      <div className="font-sans">
        <div className="grid lg:grid-cols-3 gap-10 p-4">
          <div className="lg:col-span-2 bg-white divide-y">
            {ProductList.map((item: CartItem) => (
              <div className="flex items-start max-sm:flex-col gap-4 py-4" key={item.id}>
                <div className="h-36 shrink-0">
                  <Image
                  alt="product image"
                  width={200}
                  height={200}
                    src={item.image}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>

                <div className="flex items-start gap-4 w-full">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                    <div className="space-y-1">
                      <h6 className="text-sm text-gray-800">
                        Size: <strong className="ml-2">7.5</strong>
                      </h6>
                      <h6 className="text-sm text-gray-800">
                        price: <strong className="ml-2">{item.price}</strong>
                      </h6>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-4">
                      <button
                        type="button"
                        onClick={() => handleRemove(item.id)}
                        className="font-semibold text-red-500 text-sm flex items-center gap-2 shrink-0"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current inline" viewBox="0 0 24 24">
                          <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                          <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="ml-auto text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => handleDecrease(item.id)}
                        className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
                          <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                        </svg>
                      </button>
                      <span className="font-bold text-sm leading-[18px]">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => handleIncrease(item.id)}
                        className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
                          <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-lg font-bold text-gray-500 mb-1"></h4>
                      <h4 className="text-lg font-bold text-gray-800">${item.totalPrice}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="shadow-md p-6 lg:sticky lg:top-0 h-max">
            <h3 className="text-lg font-bold text-gray-800 border-b pb-4">Order Summary</h3>

            <ul className="text-gray-800 divide-y mt-4">
              <li className="flex flex-wrap gap-4 text-sm py-3">
                Subtotal <span className="ml-auto font-bold">$73.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm py-3">
                Shipping <span className="ml-auto font-bold">$4.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm py-3">
                Tax <span className="ml-auto font-bold">$4.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm py-3 font-bold">
                Total <span className="ml-auto">$81.00</span>
              </li>
            </ul>

            <button
              type="button"
              className="mt-4 text-sm px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Make Payment
            </button>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Apply promo code</h3>

              <div className="flex border border-blue-600 overflow-hidden max-w-md rounded-md">
                <input
                  type="email"
                  placeholder="Promo code"
                  className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
                />
                <button
                  type="button"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-5 text-sm text-white"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MostSellingProduct />
    </>
  );
}
