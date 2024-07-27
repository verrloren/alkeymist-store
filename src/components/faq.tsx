"use client";

import Link from "next/link";
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
    <Card className="card shadow-lg xs:h-[32rem] mt-8 flex h-[33rem] w-full flex-col justify-evenly md:h-[30rem]">
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
            className="py-6 w-full font-bold dark:bg-neitral-100
						
						"
          >
            Reach out to us
          </Button>
      </CardFooter>
    </Card>
  );
}
