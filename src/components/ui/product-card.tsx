"use client";

import { Product } from "@/types/types";
import Image from "next/image";
import { IconButton } from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
1;
interface ProductCardProps {
  data: Product;
}

export function ProductCard({ data }: ProductCardProps) {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer rounded-xl border bg-white min-h-72 shadow-sm transition-transform will-change-transform hover:-translate-y-1 dark:border-neutral-900 dark:bg-neutral-950"
    >
      {/* Images and Actions */}
      <div className="relative aspect-square rounded-2xl bg-neutral-100">
        <Image
          fill
					sizes="100%"
          src={data?.images?.[0].url}
          alt={data.name}
          className="aspect-square rounded-t-xl object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={
                <Expand
                  size={20}
                  className="text-neutral-700 dark:text-neutral-400"
                />
              }
            />
            <IconButton
              onClick={onAddToCart}
              icon={
                <ShoppingCart
                  size={20}
                  className="text-neutral-700 dark:text-neutral-400"
                />
              }
            />
          </div>
        </div>
      </div>
      <div className="mx-3 py-2">
        {/* DESCRIPTION */}
        <p className="text-2xl text-neutral-800 dark:text-neutral-100 font-semibold">{data.name}</p>
        <p className="pt-2 text-sm text-neutral-500 dark:text-neutral-400">{data.category?.name}</p>
        {/* PRICE */}


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
  );
}
