'use client'

import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Product } from "@/types/types"
import { NoResults } from "./ui/no-results"
import { useRouter } from "next/navigation"

interface CarouselClientProps {
	productsCarousel: Product[]
}


export default function CarouselClient({ productsCarousel }: CarouselClientProps) {

	const router = useRouter();

	return (

		<>
			{productsCarousel.length === 0 && <NoResults />}

			<Carousel
				className="w-full"
				plugins={[
					Autoplay({
						delay: 60000,
					}),
				]}
				opts={{
					align: "start",
					loop: true,
				}}
			>
				<CarouselContent>
					{productsCarousel.map((product) => (

						<CarouselItem
							className="cursor-pointer "
							key={product.name}
							onClick={() => router.push(`/product/${product?.id}`)}
						>

							<div className="w-full h-[40rem] md:h-[35rem] lg-4:h-[40rem] xl:h-[85dvh] relative">

								<span 
								className="absolute text-white font-semibold
							 right-8 bottom-8 sm:right-10 md:right-12 lg:right-14 sm:bottom-10 lg:bottom-12 
							 text-7xl md:text-9xl">
									{product.name}
								</span>

								<Image
									width={2800}
									height={1800}
									className="object-cover bg-center w-full h-full xl:rounded-md"
									alt={product.name}
									src={product.images?.[0].url}
									rel="preload"
									priority
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="hidden 2xl:block">
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</>



	)
}