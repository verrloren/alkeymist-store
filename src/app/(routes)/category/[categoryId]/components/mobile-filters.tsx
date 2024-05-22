'use client'

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Size } from "@/types/types"
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
	sizes: Size[]
}

export function MobileFilters({ sizes }: MobileFiltersProps) {
	const [open, setOpen] = useState(false);

	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);

	return (
		<>
			<Button
				className="flex items-center gap-x-2 md:hidden"
				onClick={onOpen}
			>
				Filters
				<Plus size={20} />
			</Button>

			<Dialog
				as="div"
				open={open}
				onClose={onClose}
				className="relative z-40 md:hidden"
			>
				<div className="fixed inset-0 bg-black bg-opacity-25" />

				<div className="fixed inset-0 z-40 flex">
					<Dialog.Panel
						className="relative ml-auto flex h-full w-full max-w-xs flex-col 
						overflow-y-auto bg-white py-4 bg-6 shadow-xl"
					>
						<div
							className="flex items-center justify-end px-4"
							onClick={onClose}
						>
							<IconButton icon={<X size={15} />} />
						</div>

						<div className="p-4">
							<Filter
								valueKey="sizeId"
								name="Sizes"
								data={sizes}
							/>
						</div>
					</Dialog.Panel>
				</div>

			</Dialog>
		</>
	)
}
