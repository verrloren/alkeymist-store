import { Product } from "@/types/types";
import axios from "axios";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query { 
	categoryId?: string;
	sizeId?: string;
	isFeatured?: boolean;
	onCarousel?: boolean;
	onSale?: boolean;
	price?: string;
	newprice?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {

	const  url = qs.stringifyUrl({
		url: URL,
		query: {
			sizeId: query.sizeId,
			categoryId: query.categoryId,
			isFeatured: query.isFeatured,
			onCarousel: query.onCarousel,
			onSale: query.onSale,
			price: query.price,
			newprice: query.newprice,
		}
	})

	const res = await axios.get(url, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	
	return res.data; // Extract the data from the Axios response and return it as an array of categories
}

export default getProducts;
