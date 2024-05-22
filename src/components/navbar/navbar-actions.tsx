'use client'

import { ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"

interface NavbarActionsProps {}

export default function NavbarActions({}: NavbarActionsProps) {

	//hydration prevention
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const router = useRouter();
	const cart = useCart();

	if (!isMounted) return null

	return (
	<div className="ml-auto flex  items-center gap-x-4">
			<Button onClick={() => router.push("/cart")} className="flex items-center rounded-md px-4 py-1">
				<ShoppingBag 
					size={18} 
					className=" text-white"
				/>
				<span className="ml-2 text-sm font-medium text-white">
					{cart.items.length}
				</span>
			</Button>
		</div>
	)
}
