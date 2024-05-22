import { Billboard } from "@/types/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {

	const res = await axios.get(`${URL}/${id}`, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	return res.data; // Extract the data from the Axios response and return it as an array of categories
}

export default getBillboard;
