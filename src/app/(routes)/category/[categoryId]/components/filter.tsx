'use client'

import qs from 'query-string'

import { Size } from "@/types/types"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FilterProps {
	valueKey: string
	name: string
	data: Size[]
}

export default function Filter({
	valueKey,
	name,
	data
}: FilterProps) {

	const router = useRouter();
	const searchParams = useSearchParams();

	// get the selected value from the query string
	//url = http://localhost:3000/category?valueKey=
	const selectedValue = searchParams.get(valueKey);

	//clicking on filter we need to pass id to onClick function
	const onClick = (id: string) => {
		//get current qyery string

		const current = qs.parse(searchParams.toString());


		// create a new query string and updating with the selected value
		const query = {
			...current,
			[valueKey]: id
		};


		// if the value is already selected, remove it
		if (current[valueKey] === id) {
			query[valueKey] = null;
		}

		// create a new url with the updated query string
		const url = qs.stringifyUrl({
			url: window.location.href,
			query: query
		}, { skipNull: true });

		router.push(url);
	}

	return (
		<div className='mb-8'>
			<h3 className="text-lg font-semibold">
				{name}
			</h3>
			<hr className='mt-4' />
			<div className="flex flex-wrap gap-2">
				{data.map((filter) => (
					<div key={filter.id} className="flex items-center">
						<Button
							onClick={() => onClick(filter.id)}
							className={cn(
								"rounded-md text-sm text-neutral-900 hover:bg-neutral-900 hover:text-white bg-white border border-gray-300",
								selectedValue === filter.id && "bg-neutral-900 text-white"
							)}
						>
							{filter.name}
						</Button>
					</div>
				))}
			</div>
		</div>
	)
}

