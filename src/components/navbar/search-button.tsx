"use client";

import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface SearchButtonProps {}

export function SearchButton({}: SearchButtonProps) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/search")}
      className="flex items-center  rounded-md bg-transparent px-4 py-1 transition-colors 
			dark:bg-transparent shadow-none hover:bg-transparent dark:text-neutral-200 dark:hover:text-neutral-50"
    >
      <Search size={18} className="text-neutral-900 dark:text-neutral-200" />
    </Button>
  );
}
