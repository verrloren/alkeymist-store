'use client'

import { ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface NavbarActionsProps { }

export default function NavbarActions({ }: NavbarActionsProps) {

	//hydration prevention
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const router = useRouter();
	const cart = useCart();

	if (!isMounted) return null

	return (
		<div className=" flex  items-center gap-x-4">
			<Button
				onClick={() => router.push("/cart")}
				className="flex items-center rounded-md px-4 py-1 bg-transparent
				shadow-none hover:bg-transparent transition-colors"
			>
				<ShoppingBag
					size={18}
					className=" text-neutral-900 dark:text-neutral-200"
				/>
				<span className="ml-2 text-sm font-medium text-neutral-900 dark:text-neutral-200">
					{cart.items.length}
				</span>
			</Button>
		</div>
	)
}
