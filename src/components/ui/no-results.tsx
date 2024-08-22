"use client";

import { ChevronsLeftIcon } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface NoResultsProps {}

export function NoResults({}: NoResultsProps) {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-8 pt-16 text-neutral-500">
      <p className="text-5xl font-semibold">This collection is empty</p>

      <h3 
				className="font-semibold text-neutral-300 text-5xl dark:hover:text-neutral-50
				flex items-center justify-center cursor-pointer"
				onClick={() => router.push("/")}
			>
        <ChevronsLeftIcon size={50} className="pr-2" />
        Go Back
      </h3>

    </div>
  );
}
