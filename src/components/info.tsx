"use client";

import { Product } from "@/types/types";
import Currency from "./ui/currency";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

export function Info({ data }: InfoProps) {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-neutral-900 dark:text-neutral-100">
        {data.name}
      </h1>

      <div className="mt-4 flex items-center gap-x-4">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-400">
          Size:
        </h3>
        <div className="text-neutral-900 dark:text-neutral-400">
          {data?.size?.name}
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-400">
          Price:
        </h3>
        <div className="text-neutral-900 dark:text-neutral-400">
          {data?.newprice !== "0" ? (
            <div className="mt-1 flex items-center justify-start gap-4">
              <Currency value={data?.newprice} />
              <Currency oldprice value={data?.price} />
            </div>
          ) : (
            <div className="mt-1 flex items-center justify-between">
              <Currency value={data?.price} />
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="dark:border-white/05 flex w-full items-center justify-center gap-x-2 bg-black/90 py-5 text-lg text-neutral-100 backdrop-blur-sm hover:bg-black/95 dark:border dark:border-white/5 dark:bg-white/5 dark:text-neutral-50 dark:hover:border-white/15 dark:hover:bg-transparent dark:hover:text-white"
        >
          Add to Cart
          <ShoppingCart size={18} />
        </Button>
      </div>
    </div>
  );
}
