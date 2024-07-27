'use client'

import { Search } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface SearchBarProps {}

export function SearchBar({}: SearchBarProps) {

	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = (searchTerm: string) => {
		const params = new URLSearchParams(searchParams);

		if (searchTerm) {
			params.set("query", searchTerm)
		} else {
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`)
	}

	return (
		<div>
			<div className="relative  flex flex-1 flex-shrink-0 justify-center items-center">
				<input
					className="peer block rounded-md w-full h-10 mx-4 placeholder-neutral-500
					 focus:placeholder-neutral-600 dark:focus:placeholder-neutral-400 
					border dark:border-neutral-800 dark:text-neutral-200 focus:outline-none
					transition-colors focus:border-neutral-400
					py-6 pl-12 text-md bg-white dark:bg-neutral-950 text-neutral-800
					 focus:bg-white
					dark:focus:bg-black dark:focus:border-neutral-700"
					placeholder="Search for..."
					type="text"
					onChange={e => handleSearch(e.target.value)}
					defaultValue={searchParams.get("query")?.toString()}
					
				/>
				<Search size={18} className="absolute left-8 top-1/2 -translate-y-1/2 
				text-neutral-500 dark:peer-focus:text-neutral-400 peer-focus:text-neutral-600" />
			</div>
		</div>
	)
}
