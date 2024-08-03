"use client";
import { useEffect, useState } from "react";
import {
  GetHomePageBannerList,
  GetProductList,
} from "./services/_home_page_service";
import { DemoModel, ProductProps } from "@/components/models/_product_model";
import { Subscription } from "rxjs";
import Cardlayout from "@/components/layout/_card";

export default function Home() {
  const [products, setProducts] = useState<DemoModel[]>([]);
  const [Banner, setBenner] = useState<DemoModel[]>([]);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const subscription: Subscription = GetProductList().subscribe({
      next: (data) => setProducts(data),
      error: (err) => setError("Failed to fetch products"),
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const subscribe = GetHomePageBannerList().subscribe({
      next: (data) => setBenner(data),
      error: (err) => setError("Failed to fetch products"),
    });
    return () => subscribe.unsubscribe();
  }, []);

  return (
    <>
      <main className="bg-white py-20 sm:py-20 md:py-20 ">
        <section>
          <div className="bg-slate-200 text-center">

            {/* <h2 className="text-base font-semibold leading-7">Spect section</h2>
            <hr />
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

              {products.map((product) => (
                <div key={product.id}>{product.title}</div>
              ))}

            </div> */}

            <Cardlayout propList={products}  />

          </div>
        </section>
      </main>
    </>
  );
}
