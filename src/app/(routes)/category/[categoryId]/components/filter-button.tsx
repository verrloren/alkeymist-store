"use client";

import { Size } from "@/types/types";
import {  Settings2 } from "lucide-react";
import useFilterModal from "@/hooks/use-filter-modal";

interface FilterButtonProps {
  sizes: Size[];
}

export function FilterButton({ sizes }: FilterButtonProps) {

	const filterModal = useFilterModal();

	const onFilterOpen = () => {

		filterModal.onOpen();
	}


  return (
      <div
        className="text-lg peer fixed bottom-12 left-1/2 z-10 flex h-12 w-32 md:w-48 md:h-12 
				-translate-x-[50%] cursor-pointer items-center justify-center gap-x-2 rounded-full 
				border border-neutral-800 dark:border-white/10 hover:shadow-2xl 
				bg-[#000000dd] dark:bg-black/70 font-semibold text-white backdrop-blur-sm hover:brightness-150 transition-all"
        onClick={onFilterOpen}
      >
        <Settings2 className="text-lg font-light text-neutral-100 dark:text-neutral-100" />
        <h3 className="text-lg font-light text-white dark:text-neutral-100">Filters</h3>
      </div>
  );
}
