'use client'

import Image from "next/image";
import { Image as ImageType } from "@/types/types";
import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";

interface GalleryTabProps {
	image: ImageType;
}

export function GalleryTab({ image }: GalleryTabProps) {
	return (
		<Tab className="relative flex aspect-square cursor-pointer
		items-center justify-center rounded-md bg-white">
			{({ selected }) => (
				<div className="">
					<span className="abstolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
						<Image
							fill
							src={image.url}
							className="object-cover object-center"
							alt="empty"
						/>
					</span>
					<span className={cn(
						"absolute inset-0 rounded-md ring-2 ring-offset-2",
						selected ? "ring-black" : "ring-transparent"
					)} />
				</div>
			)}
		</Tab>
	)
}
