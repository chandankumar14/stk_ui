"use client";
import { useEffect, useState } from "react";
import {GetHomePageBannerList,GetProductList,
} from "./services/_home_page_service";
import { DemoModel,  } from "@/components/models/_product_model";
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
          <Cardlayout propList={products}  />
          </div>
        </section>
      </main>
    </>
  );
}
