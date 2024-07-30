'use client'

import { useEffect, useState } from "react"

interface FilterPriceInputProps {
	onFilterChange: (minPrice: number, maxPrice: number) => void
}

export function FilterPriceInput({ onFilterChange }: FilterPriceInputProps) {

	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(100)

	useEffect(() => {
		if(minPrice > maxPrice) {
			setMaxPrice(minPrice)
		}
		onFilterChange(minPrice, maxPrice)
	}, [minPrice, maxPrice, onFilterChange])
	
	return (
		<div>FilterPriceInput</div>
	)
}
