import { Container } from "@/components/ui/container";
import getProduct from "../../../../../actions/get-product";
import getProducts from "../../../../../actions/get-products";
import { ProductList } from "@/components/product-list";
import { Gallery } from "@/components/gallery";
import { Info } from "@/components/info";

interface PageProps {
	params: {
		productId: string;
	}
}

export default async function ProductPage({ params }: PageProps) {

	const product = await getProduct(params.productId);

	const suggestedProducts = await getProducts({
		categoryId: product?.category?.id
	})

	return (
		<div className="bg-neutral-50 dark:bg-[#070707] pt-0">
			<Container>
				<div className="px-4  py-12 sm:px-6 lg:px-0">
					<div className="md:grid md:grid-cols-2 md:gap-x-16">
						{/* GALLERY */}
						<Gallery images={product.images} />
						<div className=" px-4 mt-8 md:mt-0 sm:px-0 lg:mt-0">
							{/* INFO */}
							<Info data={product} />
						</div>
					</div>


					<h1 className="mt-14 pb-4 text-5xl font-semibold">You may also like</h1>
					<ProductList items={suggestedProducts} />
				</div>
			</Container>
		</div>
	)
}
