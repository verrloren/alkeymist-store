
interface HorizontalScrollProps {
	children: React.ReactNode
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
	return (
		<div className="flex overflow-x-scroll p-4 space-x-4 ">
			{children}
		</div>
	)
}
