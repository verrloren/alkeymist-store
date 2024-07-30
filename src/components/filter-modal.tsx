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
  const [maxPrice, setMaxPrice] = useState(100);

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
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-neutral-50">{name}</AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-400">
              <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                  <div key={filter.id} className="flex items-center">
										{filter.name !== '0' && (
											<Button
                      onClick={() => sizesToUrl(filter.id)}
                      className={cn(
                        "rounded-md border border-neutral-400 bg-neutral-100 text-sm text-neutral-900 hover:bg-neutral-950 hover:text-neutral-50",
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
          <AccordionItem value="item-2" className="w-full">
            <AccordionTrigger className="text-lg text-neutral-50">Price</AccordionTrigger>
            <AccordionContent className="h-24 text-sm text-neutral-400">
              <div className="mt-6 flex h-full w-full flex-col items-center justify-center">
                <Slider
                  max={1000}
                  min={0}
                  step={1}
                  value={range}
                  onValueChange={handleRangeChange}
                  formatLabel={(value: number) => `${value} $`}
                  minStepsBetweenThumbs={0}
                />

                {/*	 PRICE INPUTS	 */}
                <div className="flex h-full w-full items-start gap-x-2">
                  <div className="w-full">
                    <h3 className="mb-2 block">From</h3>
                    <input
                      className="w-full rounded-md border p-2"
                      type="number"
                      value={minPrice}
                      onChange={(e) => {
                        setMinPrice(Number(e.target.value));
                        handlePriceChange(e.target.value, maxPrice.toString());
                      }}
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <h3 className="mb-2 block">To</h3>
                    <input
                      className="w-full rounded-md border p-2"
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
				  className="bg-[#fff] text-lg w-full absolute bottom-[3%] left-0"
          onClick={() => {
            router.push(pathname);
            setMinPrice(0);
            setMaxPrice(100);
          }}
        >
          Clear All
        </Button>
      </div>
    </MenuModalComponent>
  );
}
