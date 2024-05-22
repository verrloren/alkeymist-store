'use client'

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface ButtonCustomProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonCustom = forwardRef<HTMLButtonElement, ButtonCustomProps>(({
	className,
	children,
	disabled,
	type = "button",
	...props
}, ref) => {
	return (
		<button
			className={cn(
				`w-auto rounded-full bg-dark border-transparent 
				px-5 py-1 disabled:cursor-not-allowed disabled:opacity-50 
				text-white font-semibold transition peer hover:bg-neutral-800`, 
				className
			)}
			ref={ref}
		>
			{children}
		</button>
	)
})

ButtonCustom.displayName = "Button"

export default ButtonCustom;