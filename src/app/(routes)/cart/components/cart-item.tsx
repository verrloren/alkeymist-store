"use client";

import Currency from "@/components/ui/currency";
import { IconButton } from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types/types";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

export function CartItem({ data }: CartItemProps) {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };


  return (
    <li className={`flex py-6 `}>
      <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
        <Image
          fill
					sizes="100%"
          src={data.images[0].url}
          alt="alt"
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute right-0 top-0 z-10">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>

        <div className="relative sm:grid sm:grid-rows-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="font-semilbold text-xl text-neutral-950 dark:text-neutral-100">
              {data.name}
            </p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-neutral-400">Size: {data.size.name}</p>
          </div>

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
    </li>
  );
}
