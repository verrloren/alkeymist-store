'use client'

import { MenuModal } from "@/components/menu-modal";
import { Category } from "@/types/types";
import { useEffect, useState } from "react"

interface MenuModalProviderProps {
	categories: Category[];
}

export default function MenuModalProvider({ categories }: MenuModalProviderProps) {

	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, []);

	if(!isMounted) return null

	return (
		<>
			<MenuModal categories={categories} />
		</>
	)
}
