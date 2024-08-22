'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionFilterProps {
	name: string
}

export function AccordionFilter({ name }: AccordionFilterProps) {
	return (
    <Accordion type="single" collapsible className="w-full">

      <AccordionItem value="item-1">
        <AccordionTrigger>{name}</AccordionTrigger>
        <AccordionContent className="text-sm text-neutral-400">
				Every order will be shipped on the next business day! Delays can occur if we have special events like Black Friday!
        </AccordionContent>
      </AccordionItem>
      
    </Accordion>
	)
}
