"use client";

import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useFilterModal from "@/hooks/use-filter-modal";
import MenuModalComponent from "./ui/menu-modal-component";
import { Product, Size } from "@/types/types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { useState } from "react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

interface FilterModalProps {
  sizeValueKey: string;
  priceValueKey: string;
  name: string;
  data: Size[];
  prices: Product[];
}

export function FilterModal({
  sizeValueKey,
  name,
  data,
}: FilterModalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterModal = useFilterModal();
  const pathname = usePathname();
  const minPriceValueKey = "minPrice";
  const maxPriceValueKey = "maxPrice";

  const [range, setRange] = useState([0, 1000]);

  const handleRangeChange = (value: any) => {
    setRange(value);
		handlePriceChange(value[0].toString(), value[1].toString());
  };

  // get the selected value from the query string
  //url = http://localhost:3000/category?valueKey=
  const sizeSelectedValue = searchParams.get(sizeValueKey);

  //clicking on filter we need to pass id to sizesToUrl function
  const sizesToUrl = (id: string) => {
    //get current qyery string
    const current = qs.parse(searchParams.toString());
    // create a new query string and updating with the selected value
    const query = {
      ...current,
      [sizeValueKey]: id,
    };
    // if the value is already selected, remove it
    if (current[sizeValueKey] === id) {
      query[sizeValueKey] = null;
    }
    // create a new url with the updated query string
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: query,
      },
      { skipNull: true },
    );
    router.push(url);
  };

  // PRICE INPUTS

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handlePriceChange = (minPrice: string, maxPrice: string) => {
    //get current qyery string
    const current = qs.parse(searchParams.toString());
    // create a new query string and updating with the selected value
    const query = {
      ...current,
      [maxPriceValueKey]: maxPrice || undefined,
      [minPriceValueKey]: minPrice || undefined,
    };

    // create a new url with the updated query string
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: query,
      },
      { skipNull: true },
    );
    router.push(url);
  };



  return (
    <MenuModalComponent open={filterModal.isOpen} onClose={filterModal.onClose}>
      <div className="mt-4 min-h-[28dvh] w-full md:mt-8 md:min-h-[60dvh] relative">
        <Accordion type="single" collapsible className="w-full ">
          <AccordionItem 
						value="item-1" 
						className="border-b border-neutral-300 dark:border-neutral-800"
					>
            <AccordionTrigger className="text-xl text-neutral-900 dark:text-neutral-50">
						{name}
						</AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-400">
              <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                  <div key={filter.id} className="flex items-center">
										{filter.name !== '0' && (
											<Button
                      onClick={() => sizesToUrl(filter.id)}
                      className={cn(
                        "rounded-md border dark:border-white/05 bg-white/10 text-sm backdrop-blur-sm text-neutral-950 dark:hover:bg-transparent dark:text-neutral-50 hover:text-neutral-50",
                        sizeSelectedValue === filter.id &&
                          "bg-neutral-950 text-white",
                      )}
                    >
                      {filter.name}
                    </Button>
										)}
                    
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* 					PRICE SLIDER				 */}
          <AccordionItem 
						value="item-2" 
						className="w-full border-b border-neutral-300 dark:border-neutral-800"
					>
            <AccordionTrigger className="text-xl text-neutral-950  dark:text-neutral-50">
						Price
						</AccordionTrigger>
            <AccordionContent className="h-28 text-sm text-neutral-400">
              <div className="mt-6 flex h-full w-full flex-col items-center justify-center">
                <Slider
                  max={maxPrice}
                  min={minPrice}
                  step={1}
                  value={range}
                  onValueChange={handleRangeChange}
                  formatLabel={(value: number) => `${value} $`}
                  minStepsBetweenThumbs={0}
                />

                {/*	 PRICE INPUTS	 */}
                <div className="flex h-full w-full items-start gap-x-2">
                  <div className="w-full">
                    <h3 className="my-2 block text-neutral-900 dark:text-neutral-400">From</h3>
                    <input
                      className="w-full rounded-md border p-2 bg-white 
											dark:bg-white/10 text-neutral-900 dark:text-neutral-50 dark:border-neutral-800 focus:outline-1 dark:border-white/5 "
                      type="number"
                      value={minPrice}
                      onChange={(e) => {
                        setMinPrice(Number(e.target.value));
                        handlePriceChange(e.target.value, maxPrice.toString());
                      }}
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <h3 className="my-2 block text-neutral-900 dark:text-neutral-400">To</h3>
                    <input
                      className="w-full rounded-md border dark:border-neutral-800 p-2 bg-white dark:bg-white/10 text-neutral-900 dark:border-white/5
											dark:text-neutral-50"
                      type="number"
                      value={maxPrice}
                      onChange={(e) => {
                        setMaxPrice(Number(e.target.value));
                        handlePriceChange(minPrice.toString(), e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button
				  className=" dark:bg-white/5 backdrop-blur-sm  text-lg w-full h-11 absolute bottom-[3%] left-0 dark:border-white/05 dark:hover:bg-transparent dark:border dark:border-white/5 dark:hover:text-white bg-black/90 hover:bg-black/95
					 text-neutral-100 dark:text-neutral-50"
          onClick={() => {
            router.push(pathname);
            setMinPrice(0);
            setMaxPrice(1000);
						toast.success("Filters cleared");
          }}
        >
          Clear All
        </Button>
      </div>
    </MenuModalComponent>
  );
}
