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
		<div className="my-6">
			<Container>
				<div className="px-4 pyp-10 sm:px-6 lg:px-8">
					<div className="md:grid md:grid-cols-2 md:gap-x-8">
						{/* GALLERY */}
						<Gallery images={product.images} />
						<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
							{/* INFO */}
							<Info data={product} />
						</div>
					</div>

					<hr className="my-10" />

					<ProductList title="Related Items" items={suggestedProducts} />
				</div>
			</Container>
		</div>
	)
}
