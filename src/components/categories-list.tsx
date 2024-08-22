'use client'

import { Category } from "@/types/types"
import { CategoriesListItem } from "./categories-list-item"



interface CategoriesListProps { 
	categories: Category[]
 }

export function CategoriesList({ categories }: CategoriesListProps) {

	

	return (

			<div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 
			 gap-x-3 gap-y-2">

				{categories.map((category) => (
					<CategoriesListItem 
						key={category.id} 
						title={category.name} 
						srcTo={category.id}
				/>
				))}

			</div>
	)
}
