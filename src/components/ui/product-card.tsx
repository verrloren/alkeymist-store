'use client'

import { Product } from "@/types/types"
import Image from "next/image"
import { IconButton } from "./icon-button"
import { Expand, ShoppingCart } from "lucide-react"
import { Currency } from "./currency"
import { useRouter } from "next/navigation"
import { MouseEventHandler } from 'react';
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"
1
interface ProductCardProps {
	data: Product
}

export function ProductCard({ data }: ProductCardProps) {

	const router = useRouter();
	const previewModal = usePreviewModal();
	const cart = useCart();

	const handleClick = () => {
		router.push(`/product/${data?.id}`)
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
			className="bg-white  group cursor-pointer 
			hover:-translate-y-1 transition-transform rounded-xl shadow-sm"
		>
			{/* Images and Actions */}
			<div className="aspect-square rounded-xl bg-gray-100 relative">
				<Image 
					fill
					src={data?.images?.[0].url}
					alt={data.name}
					className="object-cover aspect-square rounded-t-xl"
					objectFit="cover"
				/>

				<div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
					<div className="flex gap-x-6 justify-center">
						<IconButton 
							onClick={onPreview}
							icon={<Expand size={20} className="text-gray-700" />}
						/>
						<IconButton 
							onClick={onAddToCart}
							icon={<ShoppingCart size={20} className="text-gray-700" />}
						/>
					</div>
				</div>
			</div>


			<div className="mx-2 py-2">
				{/* DESCRIPTION */}
				<p className="font-semibold text-lg">
					{data.name}
				</p>
				<p className="text-sm trext-gray-500">
					{data.category?.name}
				</p>

				{/* PRICE */}
				<div className="flex items-center justify-between mt-1">
					<Currency value={data?.price} />
				</div>
			</div>
		</div>
	)
}
