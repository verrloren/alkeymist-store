"use client";

import qs from "query-string";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Size } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AccordionFilter } from "@/components/accordion-filter";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface FilterProps {
  valueKey: string;
  name: string;
  data: Size[];
}

export default function Filter({ valueKey, name, data }: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [range, setRange] = useState([0, 1000]);

  const handleRangeChange = (value: any) => {
    setRange(value);
  };

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
      [valueKey]: id,
    };

    // if the value is already selected, remove it
    if (current[valueKey] === id) {
      query[valueKey] = null;
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

  return (
    <div className="mb-8 w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{name}</AccordionTrigger>
          <AccordionContent className="text-sm text-neutral-400">
            <div className="flex flex-wrap gap-2">
              {data.map((filter) => (
                <div key={filter.id} className="flex items-center">
                  <Button
                    onClick={() => onClick(filter.id)}
                    className={cn(
                      "rounded-md border border-neutral-400 bg-neutral-100 text-sm text-neutral-900 hover:bg-neutral-950 hover:text-neutral-50",
                      selectedValue === filter.id &&
                        "bg-neutral-950 text-white",
                    )}
                  >
                    {filter.name}
                  </Button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 					PRICE SLIDER				 */}
        <AccordionItem value="item-2" className="w-full">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent className=" h-20 text-sm text-neutral-400">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                min={0}
                step={1}
                value={range}
                onValueChange={handleRangeChange}
                formatLabel={(value: number) => `${value} $`}
              />

              <div className="w-full h-full flex justify-center">
                <input placeholder="0" type="text" />
                <p>to</p>
                <input placeholder="0" type="text" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
