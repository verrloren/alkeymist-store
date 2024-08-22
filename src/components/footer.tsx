"use client";

import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import {
  DiscordLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Newsletter } from "./newsletter";
import { Container } from "./ui/container";
import Image from "next/image";
import { Socials } from "./ui/socials";

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col items-center justify-center border-t border-neutral-200 bg-white dark:border-neutral-900 dark:bg-[#070707]">
      <div className="mb-12 mt-16 w-[80%] flex flex-col justify-between items-start md:items-center gap-y-12 sm:w-[80%] md:mt-12 md:w-[90%] md:flex-row md:gap-x-8 lg:w-[90%] xl:w-[80%]">
        {/* col */}
        <div className="max-w- flex flex-col items-start justify-start gap-y-8">
          {/* row */}
          <div className="flex flex-col items-start justify-start gap-x-8 md:flex-row md:items-center md:justify-start">
            {/* LOGO */}
            <div className="flex flex-col gap-y-8">
              <Logo />

              {/* SOCIALS */}
              {/* <div className="hidden w-full md:block">
                <div className="flex flex-row items-center justify-between gap-x-4">
                  <Socials />
                </div>
              </div> */}
              {/* NEWSLETTER */}
              <div className="hidden md:block">
                <Newsletter />
              </div>
            </div>
          </div>

          <div className="hidden w-full md:block">
            <div className="flex flex-row items-center gap-x-7">
              <Socials />
            </div>
          </div>

          {/* PAYMENT METHODS */}
					<div className="hidden md:flex w-[80%] items-center justify-start gap-x-6 sm:w-[80%] md:w-[90%] lg:w-[90%] xl:w-[75%]">
            <Image
              width={28}
              height={28}
              src="/images/apple-pay.svg"
              alt="visa"
            />
            <Image width={28} height={28} src="/images/visa.svg" alt="visa" />
            <Image
              width={28}
              height={28}
              src="/images/mastercard-logo.svg"
              alt="visa"
            />
            <Image width={28} height={28} src="/images/paypal.svg" alt="visa" />
            <Image
              width={28}
              height={28}
              src="/images/google-pay.svg"
              alt="visa"
            />
            <Image
              width={28}
              height={28}
              src="/images/unionpay.svg"
              alt="visa"
            />
          </div>
          {/* NEWSLETTER */}
          {/* <div className="hidden md:block"> */}
          {/* <Newsletter />
          </div> */}
        </div>
        {/* SUPPORT & COMMUNITY */}
        <div className="md:w-52">
          <h3 className="cursor-default font-semibold text-lg text-neutral-800 dark:text-neutral-200">
            Support & Community
          </h3>
          <ul className="text-md mt-2 text-neutral-600">
            <li className="cursor-pointer pt-3 transition-colors hover:text-neutral-900 dark:hover:text-neutral-400">
              About Us
            </li>
            <li className="cursor-pointer pt-1 transition-colors hover:text-neutral-900 dark:hover:text-neutral-400">
              Contact Us
            </li>
            <li className="cursor-pointer pt-1 transition-colors hover:text-neutral-900 dark:hover:text-neutral-400">
              Switch Guide
            </li>
            <li className="cursor-pointer pt-1 transition-colors hover:text-neutral-900 dark:hover:text-neutral-400">
              Sustainability
            </li>
            <li className="cursor-pointer pt-1 transition-colors hover:text-neutral-900 dark:hover:text-neutral-400">
              Track Your Order
            </li>
          </ul>
        </div>
        {/* SITE INFORMATION */}
        <div className="md:w-52">
          <h3 className="cursor-default font-semibold text-lg text-neutral-800 dark:text-neutral-200">
            Site Information
          </h3>
          <ul className="text-md mt-2 text-neutral-600 dark:text-neutral-600">
            <li className="cursor-pointer pt-3 transition-colors hover:text-neutral-800 dark:hover:text-neutral-400">
              Privacy Policy
            </li>
            <li className="cursor-pointer pt-1 transition-colors hover:text-neutral-800 dark:hover:text-neutral-400">
              Refund & Return
            </li>
            <li className="cursor-pointer pt-1 transition-colors hover:text-neutral-800 dark:hover:text-neutral-400">
              Shipping Policy
            </li>
            <li className="cursor-pointer pt-1 transition-colors hover:text-neutral-800 dark:hover:text-neutral-400">
              Terms Of Service
            </li>
            <li className="cursor-pointer pt-1 transition-colors hover:text-neutral-800 dark:hover:text-neutral-400">
              Contact Us
            </li>
          </ul>
        </div>

        <div className="block md:hidden">
          {/* NEWSLETTER */}
          <Newsletter />
        </div>
        {/* SOCIALS */}
        <div className="flex w-full flex-col md:hidden">
          <div className="-mt-2 flex flex-row items-center gap-x-7">
            <Socials />
          </div>
        </div>

				{/* PAYMENT METHODS */}
				<div className="-mt-2 flex md:hidden w-[80%] items-center justify-start gap-x-6 sm:w-[80%] md:w-[90%] lg:w-[90%] xl:w-[75%]">
            <Image
              width={28}
              height={28}
              src="/images/apple-pay.svg"
              alt="visa"
            />
            <Image width={28} height={28} src="/images/visa.svg" alt="visa" />
            <Image
              width={28}
              height={28}
              src="/images/mastercard-logo.svg"
              alt="visa"
            />
            <Image width={28} height={28} src="/images/paypal.svg" alt="visa" />
            <Image
              width={28}
              height={28}
              src="/images/google-pay.svg"
              alt="visa"
            />
            <Image
              width={28}
              height={28}
              src="/images/unionpay.svg"
              alt="visa"
            />
          </div>

        {/* THEME TOGGLE */}
        <div className="absolute bottom-[8%] right-[6%] -translate-y-[50%]">
          <ModeToggle />
        </div>
      </div>

      <div className="mx-auto pb-12 pt-12 md:py-16 lg:py-12">
        <p className="text-center text-xs text-neutral-950 dark:text-neutral-600">
          &copy; 2024, Alkeymist®
        </p>
      </div>
    </footer>
  );
}
