"use client";

import { AccordionClient } from "./accordion-client";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";

interface FaqProps {}

export function Faq({}: FaqProps) {
  return (
    <Card className="shadow-lg xs:h-[32rem] mt-8 flex h-[33rem] w-full flex-col justify-evenly md:h-[30rem]">
      <div className="flex flex-row items-center xl:px-12">
        <CardHeader>
          <h1 className="text-4xl font-semibold dark:text-neutral-100">
            Alkeymist® FAQs
          </h1>
          <CardDescription className="pt-4 text-xs text-neutral-400">
              If you need further assistance feeld free to contact us via{" "}
              {/* <span className="cursor-pointer text-neutral-500 font-semibold underline">support@alkeymist.com</span> */}
          </CardDescription>
        </CardHeader>

        <CardContent className="w-full">
          <AccordionClient />
        </CardContent>
      </div>

      <CardFooter className="flex w-full items-center justify-center -px-8">
          <Button
            variant="default"
            size="lg"
            className="py-6 dark:border-white/05 mt-4 flex w-full items-center justify-center gap-x-2 bg-black/90 text-lg text-neutral-100 backdrop-blur-sm hover:bg-black/95 dark:border dark:border-white/5 dark:bg-white/5 dark:text-neutral-50 dark:hover:border-white/15 dark:hover:bg-transparent dark:hover:text-white
						
						"
          >
            Reach out to us
          </Button>
      </CardFooter>
    </Card>
  );
}
