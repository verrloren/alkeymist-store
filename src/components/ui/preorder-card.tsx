"use client";

import Image from "next/image";
import { Card, CardContent } from "./card";
import { Arrow } from "./arrow";
import { ArrowRightFromLineIcon } from "lucide-react";

interface PreorderCardProps {
  headerText: string;
  imgSrc: string;
}

export function PreorderCard({ headerText, imgSrc }: PreorderCardProps) {
  return (
    <div className="group relative h-60 w-full cursor-pointer border border-neutral-900 md:border-none  rounded-lg">

      <div className="absolute bottom-0 left-2 sm:left-0 flex h-1/3 sm:h-1/3 w-1/3 items-center justify-center rounded-lg bg-transparent transition-all delay-500 duration-300 ease-out">
        <h3 className="preorder-header z-5 text-3xl font-semibold dark:text-neutral-200 will-change-transform group-hover:-translate-y-20
				sm:group-hover:-translate-y-16 lg:group-hover:scale-125 group-hover:text-neutral-50 group-hover:transition-all group-hover:delay-150 group-hover:duration-300 group-hover:ease-in-out">
          {headerText}
        </h3>

        <div className="arrow-1 after group-hover:before:transtion-opacity before group-hover:before:transtion-all absolute left-0 sm:left-0 lg:top-0 top-[12%] w-full before:w-0 after:opacity-0 group-hover:transition-all group-hover:duration-200 group-hover:ease-in-out group-hover:before:w-full group-hover:before:delay-300 group-hover:before:duration-300 group-hover:after:opacity-100 group-hover:after:delay-300 group-hover:after:duration-300" />
      </div>

      <Image
        src={imgSrc}
        width={1000}
        height={1000}
        alt="Preorder"
        className="preorder -z-10 h-full w-full rounded-lg bg-cover bg-center object-cover will-change-transform group-hover:transition-all group-hover:duration-200 group-hover:ease-in-out group-hover:clip-path-custom"
      />
    </div>
  );
}
