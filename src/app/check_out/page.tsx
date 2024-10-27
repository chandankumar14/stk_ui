"use client"
import React, { useState } from 'react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const handlePaymentChange = (e:any) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="font-sans py-[100px]  bg-white rounded-lg shadow-md">
       <div className="max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Summary */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Product Name</span>
            <span>$49.99</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Quantity</span>
            <span>1</span>
          </div>
          <div className="flex justify-between mb-2 font-bold">
            <span>Total</span>
            <span>$49.99</span>
          </div>
        </div>

        {/* Address Form */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
              <input type="text" id="address" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
              <input type="text" id="city" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="zip" className="block text-sm font-medium mb-1">Zip Code</label>
              <input type="text" id="zip" className="w-full p-2 border border-gray-300 rounded" required />
            </div>

            {/* Payment Method Selection */}
            <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
            <div className="flex flex-col mb-4">
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  value="credit"
                  checked={paymentMethod === 'credit'}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                PayPal
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  value="stripe"
                  checked={paymentMethod === 'stripe'}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                Stripe
              </label>
            </div>

            {paymentMethod === 'credit' && (
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number</label>
                <input type="text" id="cardNumber" className="w-full p-2 border border-gray-300 rounded" required />
              </div>
            )}
            {paymentMethod === 'credit' && (
              <div className="mb-4">
                <label htmlFor="expiry" className="block text-sm font-medium mb-1">Expiry Date (MM/YY)</label>
                <input type="text" id="expiry" className="w-full p-2 border border-gray-300 rounded" required />
              </div>
            )}
            {paymentMethod === 'credit' && (
              <div className="mb-4">
                <label htmlFor="cvv" className="block text-sm font-medium mb-1">CVV</label>
                <input type="text" id="cvv" className="w-full p-2 border border-gray-300 rounded" required />
              </div>
            )}

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Checkout;
