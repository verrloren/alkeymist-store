"use client";

import { Heart, HelpingHandIcon, Truck } from "lucide-react";
import Image from "next/image";

interface FillingInfoProps {}

export function FillingInfo({}: FillingInfoProps) {
  return (
      <div className="my-16 grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center">
          <h3 className="mb-2 font-semibold dark:text-neutral-200">
            <Heart />
          </h3>
					{/* <Image src="/images/heart_3d.png" width={30} height={30} alt="trust" /> */}
          <h3 className="mb-2 font-semibold dark:text-neutral-200">
            With Love From Alkeymist®
          </h3>
          <p className="text-center text-sm text-neutral-600">
            Every Order is packed and checked by Keyboard Lovers who share the
            same passion about this Hobby as our Customers.
          </p>
        </div>

        <div className="md:flex flex-col items-center mt-4 hidden ">
          <h3 className="mb-2 font-semibold dark:text-neutral-200">
            <Truck />
          </h3>
					{/* <Image src="/images/truck_3d.png" width={30} height={30} alt="truck" /> */}
          <h3 className="mb-2 font-semibold dark:text-neutral-200">
            Fast Processing Time
          </h3>
          <p className="text-center text-sm text-neutral-600">
            Every Order is processed and shipped on the next business day.
          </p>
        </div>

        <div className="md:flex flex-col items-center hidden ">
          <h3 className="mb-2 font-semibold dark:text-neutral-200">
            <HelpingHandIcon />
          </h3>
					{/* <Image src="/images/help_3d.png" width={30} height={30} alt="trust" /> */}
					
          <h3 className="mb-2 font-semibold dark:text-neutral-200">
            Top-notch Support
          </h3>
          <p className="text-center text-sm text-neutral-600">
            Our Teams does its best to answer every question within 24h via{" "}
            <span className="cursor-pointer font-semibold text-neutral-500 underline">
              support@alkeymist.com
            </span>
          </p>
        </div>
      </div>
  );
}
