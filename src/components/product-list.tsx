import { Product } from "@/types/types";
import { NoResults } from "./ui/no-results";
import { ProductCard } from "./ui/product-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";


interface ProductListProps {
	items: Product[];
}

export function ProductList({ items }: ProductListProps) {

	return (
		<div className="space-y-4 featured-reverse mt-6">

			{items.length === 0 && <NoResults />}
		

			<Carousel>	
				<CarouselContent>
					{items.map((item) => (
						<CarouselItem key={item.name} className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
							<ProductCard data={item} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div >
	)
}
