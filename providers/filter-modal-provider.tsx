'use client'

import { FilterModal } from "@/components/filter-modal";
import { Product, Size } from "@/types/types";
import { useEffect, useState } from "react"

interface FilterModalProviderProps {
	sizes: Size[];
	prices: Product[];
}

export default function FilterModalProvider({ sizes, prices }: FilterModalProviderProps) {

	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, []);

	if(!isMounted) return null

	return (
		<>
			<FilterModal priceValueKey="price" sizeValueKey="sizeId" name="Sizes" data={sizes} prices={prices} />
		</>
	)
}
