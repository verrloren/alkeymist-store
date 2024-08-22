import { Product } from "@/types/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {

	const res = await axios.get(`${URL}/${id}`, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	return res.data; // Extract the data from the Axios response and return it as an array of categories
}

export default getProduct;
