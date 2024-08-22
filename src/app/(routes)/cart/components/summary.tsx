"use client";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface SummaryProps {}

export default function Summary({}: SummaryProps) {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Order canceled");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    if (item.newprice !== "0") {
      return total + Number(item.newprice);
    } else {
      return total + Number(item.price);
    }
  }, 0);

  const onCheckout = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: items.map((item) => item.id),
        }
      );

      if (response.data && response.data.url) {
        window.location = response.data.url;
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Checkout failed. Please try again.");
    }
  };

  return (
    <div className="card relative mt-16 rounded-lg border border-neutral-200 bg-white px-4 py-6 dark:border-neutral-800 dark:bg-transparent sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-200">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-neutral-200 pt-4 dark:border-neutral-800">
          <div className="text-base font-medium text-neutral-900 dark:text-neutral-400">
            Order total
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        onClick={onCheckout}
        className="dark:border-white/05 mt-4 flex w-full items-center justify-center gap-x-2 bg-black/90 py-5 text-lg text-neutral-100 backdrop-blur-sm hover:bg-black/95 dark:border dark:border-white/5 dark:bg-white/5 dark:text-neutral-50 dark:hover:border-white/15 dark:hover:bg-transparent dark:hover:text-white"
      >
        Checkout
      </Button>
    </div>
  );
}
