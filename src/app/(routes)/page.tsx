import Billboard from "@/components/billboard";
import { Container } from "@/components/ui/container";
import getBillboard from "../../../actions/get-billboard";
import getProducts from "../../../actions/get-products";
import { ProductList } from "@/components/product-list";
import Footer from "@/components/footer";

export const revalidate = 0;

export default async function HomePage() {

	const billboard = await getBillboard("b43a922b-2ea9-4754-9d02-24d95f88a9ea");
	const products = await getProducts({ isFeatured: true });

	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard} />
				<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
					<ProductList title="Featured products" items={products} />
				</div>
			</div>
			<Footer />
		</Container>
	)
}
