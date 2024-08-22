"use client";

import Image from "next/image";
import { Card, CardContent } from "./card";

interface GroupbuyCardProps {}

export function GroupbuyCard({}: GroupbuyCardProps) {
  return (
    <div className="group relative h-60 w-full cursor-pointer">
      <div className="absolute bottom-0 left-0 flex h-1/3 w-1/3 items-center justify-center rounded-lg bg-transparent transition-transform delay-500 duration-300 ease-out group-hover:-translate-y-16">
        <h3 className="z-5 text-3xl font-semibold text-neutral-100 transition-transform delay-700 duration-300 ease-out group-hover:scale-110">
          Pre-Orders
        </h3>
      </div>

      <Image
        src="/keeb_assets/groupbuy.jpg"
        width={1000}
        height={1000}
        alt="Preorder"
        className="-z-1 slideClipReverse inset-0 left-0 top-0 h-full w-full rounded-lg bg-cover bg-center object-cover brightness-50 transition-all duration-100 ease-in-out group-hover:animate-slideClip"
      />
    </div>
  );
}
