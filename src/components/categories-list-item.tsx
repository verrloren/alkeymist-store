'use client'

import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { useRouter } from "next/navigation"
import { Arrow } from "./ui/arrow"

interface CategoriesListItemProps {
	title: string
	srcTo: string
}

export function CategoriesListItem({ title, srcTo }: CategoriesListItemProps) {

	const router = useRouter();

	const handleCategoryRedirect = (): string => {
		switch (title.toLowerCase()) {
			case "keyboards":
				return "/keeb_assets/keycaps-retro_dark.webp";
			case "keycaps":
				return "/keeb_assets/keycaps.jpg";
			case "switches":
				return "/keeb_assets/switch.jpg";
			case "accessories":
				return "/keeb_assets/deskmate_dark.webp";
			default:
				return "/keeb_assets/1.webp"; // Provide a default image path
		}
	}

	return (
		<div
			onClick={() => router.push(`/category/${srcTo}`)}
			className="group relative h-44 w-full cursor-pointer overflow-hidden rounded-lg will-change-transform"
		>
			<Image
				width={1000}
				height={1000}
				src={handleCategoryRedirect()}
				alt="alt"
				className="object-cover w-full h-full rounded-lg group-hover:scale-105
				transition-transform duration-300 ease-in-out"
			/>	
			<p className="absolute bottom-0 left-2 
			font-semilbold text-neutral-200 group-hover:text-white
			transition-colors">
				{title}
			</p>
			<Arrow />
		</div>
	)
}
