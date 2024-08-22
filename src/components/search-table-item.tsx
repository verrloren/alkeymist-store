'use client'

import { Product } from "@/types/types"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IconButton } from "./ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface SearchTableItemProps {
	filterProduct: Product
}

export function SearchTableItem({ filterProduct }: SearchTableItemProps) {

	const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    previewModal.onOpen(filterProduct);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(filterProduct);
  };

	return (
		<div
		key={filterProduct.id}
		onClick={() => router.push(`/product/${filterProduct.id}`)}
		className="w-full group cursor-pointer rounded-xl border bg-white shadow-sm transition-transform will-change-transform hover:-translate-y-1 dark:border-neutral-900 dark:bg-neutral-950"
	>
		{/* Images and Actions */}
		<div className="relative aspect-square rounded-2xl bg-neutral-100">
			<Image
				fill
				sizes="100%"
				src={filterProduct?.images?.[0].url}
				alt={filterProduct.name}
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
			<p className="text-2xl text-neutral-800 dark:text-neutral-100 font-semibold">{filterProduct.name}</p>
			<p className="pt-2 text-sm text-neutral-500 dark:text-neutral-400">{filterProduct.category?.name}</p>
			{/* PRICE */}


			{filterProduct?.newprice !== '0' ? (
            <div className="mt-1 flex items-center justify-start gap-4">
              <Currency  value={filterProduct?.newprice} />
              <Currency oldprice value={filterProduct?.price} />
            </div>
          ) : (
            <div className="mt-1 flex items-center justify-between">
              <Currency value={filterProduct?.price} />
            </div>
          )}
		</div>
	</div>
	)
}
