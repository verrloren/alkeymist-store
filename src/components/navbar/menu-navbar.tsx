"use client";

import useMenuModal from "@/hooks/use-menu-modal";
import { Category } from "@/types/types";
import { Menu } from "lucide-react";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import { Button } from "../ui/button";

interface MenuNavbarProps {
  categories: Category[];
}

export function MenuNavbar({ categories }: MenuNavbarProps) {
  const [open, setOpen] = useState(false);

  const menuModal = useMenuModal();

  const onMenuOpen: MouseEventHandler = (e) => {
    e.stopPropagation();

    menuModal.onOpen();
  };

  return (
    <div className="">
      <Button
        onClick={onMenuOpen}
        className="flex items-center rounded-md 
				 bg-transparent shadow-none text-neutral-900 hover:bg-transparent
				px-4 py-1 transition-colors dark:bg-transparent 
				dark:text-neutral-200 dark:shadow-none dark:hover:bg-transparent 
				dark:hover:text-neutral-50"
      >
        <Menu size={18} className="cursor-pointer" />
      </Button>

      {open && (
        <div className="absolute right-0 top-20 rounded-md border border-neutral-200 bg-white p-4 dark:border-neutral-900 dark:bg-[#070707]">
          <div className="flex flex-col gap-y-2">
            {categories.map((category) => (
              <Link
                className="transition-colors dark:text-neutral-300 dark:hover:text-neutral-100"
                href={`/category/${category.id}`}
                key={category.id}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
