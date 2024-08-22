"use client";

import useMenuModal from "@/hooks/use-menu-modal";
import MenuModalComponent from "./ui/menu-modal-component";
import Link from "next/link";
import { Category } from "@/types/types";
import {
  DiscordLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Socials } from "./ui/socials";

interface useMenuModalProps {
  categories: Category[];
}

export function MenuModal({ categories }: useMenuModalProps) {

  const menuModal = useMenuModal();

  return (
    <MenuModalComponent open={menuModal.isOpen} onClose={menuModal.onClose}>
      <div className="mx-4 flex w-full flex-col justify-start">
        <div className="flex w-full flex-col items-start justify-center gap-y-4 pt-4">

          {categories?.map((category) => (
            <div
              className="group flex w-1/3 items-center justify-between"
              key={category.id}
            >
              <Link
                className="text-3xl font-semibold text-neutral-900 
								transition-colors hover:text-neutral-800 
								dark:text-neutral-200 dark:hover:text-neutral-50"
                href={`/category/${category.id}`}
								onClick={menuModal.onClose}
              >
                {category.name}
              </Link>

              <div className="flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-all group-hover:translate-x-4 group-hover:opacity-100">
                <ArrowRight />
              </div>
            </div>
          ))}
        </div>


        {/* SOCIALS */}
        <div className="mt-44 flex w-1/3 flex-col">
          <div className="mt-2 flex flex-row items-center justify-between gap-x-4">
            <Socials />
          </div>
        </div>

      </div>
    </MenuModalComponent>
  );
}
