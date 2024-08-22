
import getProducts from "../../../actions/get-products";
import { SearchTableItem } from "../search-table-item";



export default async function SearchTable({ query }: { query: string }) {



	const products = await getProducts({  });

	const filteredProducts = products.filter((product) => {
		return product.name.toLowerCase().includes(query.toLowerCase())
	})

	return (
		<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8 px-4 py-4 rounded-md 
		">
			{filteredProducts.map((filterProduct) => (
				<div key={filterProduct.id} >
					<SearchTableItem filterProduct={filterProduct} />
				</div>
			))}
		</div>
	)
}
