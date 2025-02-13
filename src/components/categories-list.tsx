'use client'

import { Category } from "@/types/types"
import { CategoriesListItem } from "./categories-list-item"
import { motion } from 'framer-motion';
import { staggerContainer } from "@/lib/motion-variants";



interface CategoriesListProps { 
	categories: Category[]
 }

export function CategoriesList({ categories }: CategoriesListProps) {

	return (

			<motion.div 
				variants={staggerContainer}
				initial="hidden"
				animate="show"
				className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 
				 gap-x-3 gap-y-2"
			>

				{categories.map((category) => (
					<CategoriesListItem 
						key={category.id} 
						title={category.name} 
						srcTo={category.id}
				/>
				))}

			</motion.div>
	)
}
