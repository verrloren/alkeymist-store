'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionClientProps {}

export function AccordionClient({}: AccordionClientProps) {
	return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>When will my order be shipped?</AccordionTrigger>
        <AccordionContent className="text-sm text-neutral-400">
				Every order will be shipped on the next business day! Delays can occur if we have special events like Black Friday!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I add something to my order?</AccordionTrigger>
        <AccordionContent className="text-sm text-neutral-400">
				Yes. Please write us a message and we will add it to your order and send you an invoice. This is only possible if your order is not shipped. 
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it possible to pick up my order?</AccordionTrigger>
        <AccordionContent className="text-sm text-neutral-400">
				Yes. Please write us a message and we can arrange a timeslot and refund the shipping costs. Pick up is only possible in Aachen, Germany.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Cai I order Group-Buy / Pre-Order and In-Stock items in the same Order?</AccordionTrigger>
        <AccordionContent className="text-sm text-neutral-400">
				No. This is not possible due to the shipping times of Group-Buy / Pre-Order Products.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
	)
}
