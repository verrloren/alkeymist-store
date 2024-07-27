"use client";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Size } from "@/types/types";
import { Dialog } from "@headlessui/react";
import { Plus, Settings2, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
}

export function MobileFilters({ sizes }: MobileFiltersProps) {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <div
        className="text-md peer fixed bottom-12 left-1/2 z-10 flex h-10 w-32 -translate-x-[50%] cursor-pointer items-center justify-center gap-x-2 rounded-full border border-neutral-800 bg-[#000000bb] font-semibold text-neutral-200 backdrop-blur-md md:hidden hover:brightness-125 transition-all"
        onClick={onOpen}
      >
        <Settings2 className="text-md font-semibold text-neutral-200" />
        <h3 className="text-md font-semibold text-neutral-200">Filters</h3>
      </div>

      <Dialog
        as="div"
        open={open}
        onClose={onClose}
        className="relative z-40 md:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="bg-6 relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-neutral-100 py-4 shadow-xl dark:bg-neutral-950">
            <div
              className="flex items-center justify-end px-4"
              onClick={onClose}
            >
              <IconButton icon={<X size={15} />} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
