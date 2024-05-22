import { Size } from "@/types/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {

	const res = await axios.get(URL, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	return res.data; // Extract the data from the Axios response and return it as an array of categories
}

export default getSizes;
