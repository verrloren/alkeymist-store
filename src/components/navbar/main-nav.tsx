'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types/types";

interface MainNavProps {
	data: Category[]
}

export function MainNav({ data }: MainNavProps) {

	const pathname = usePathname();

	const routes = data.map((route) => ({
		href: `/category/${route.id}`,
		label: route.name,
		active: pathname === `/category/${route.id}`
	}))

	return (
		<nav className="flex items-center space-x-4 lg:space-x-8">
			{routes.map((route) => (
				<Link
					key={route.href}
					href={route.href}
					className={cn(
						"text-base font-light transition-colors  hover:text-neutral-950 dark:text-neutral-500 dark:hover:text-neutral-300",
						route.active ? "text-neutral-950 dark:text-neutral-300" : "text-neutral-700 dark:text-neutral-500"
					)}
				>
					{route.label}
				</Link>
			))}
		</nav>
	)
}
