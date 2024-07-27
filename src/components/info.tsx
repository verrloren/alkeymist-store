"use client";

import { Product } from "@/types/types";
import { Currency } from "./ui/currency";
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
	}

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
          {data?.size?.name}%
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-400">
          Price:
        </h3>
        <div className="text-neutral-900 dark:text-neutral-400">
          {data?.newprice !== '0' ? (
            <div className="mt-1 flex items-center justify-start gap-4">
              <Currency  value={data?.newprice} />
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
        <Button onClick={onAddToCart} className="flex items-center 
				gap-x-2 bg-neutral-800 dark:bg-neutral-100 px-8 py-2">
          Add to Cart
          <ShoppingCart size={18} />
        </Button>
      </div>
    </div>
  );
}
