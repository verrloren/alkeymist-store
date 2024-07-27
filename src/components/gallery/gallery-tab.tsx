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
		items-center justify-center rounded-md bg-white dark:bg-neutral-800">
			{({ selected }) => (
				<div className="">
					<span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
						<Image
							fill
							sizes="100%"
							src={image.url}
							className="object-cover object-center"
							alt="empty"
						/>
					</span>
					<span className={cn(
						"absolute inset-0 rounded-md ring-2 ring-offset-2 ring-transparent ring-offset-neutral-900 dark:ring-neutral-950 transition",
						selected ?  "dark:ring-offset-neutral-300 ring-offset-neutral-800" : "ring-offset-transparent"
					)} />
				</div>
			)}
			{/* ring-2 ring-offset-2 ring-offset-neutral-900 dark:ring-neutral-800 */}
		</Tab>
	)
}
