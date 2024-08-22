"use client";

import { Billboard as BillboardType } from "@/types/types";
import { useEffect, useState } from "react";
//@ts-ignore
import { ReactFitty } from "react-fitty";

interface BillboardProps {
  data: BillboardType;
}

export default function Billboard({ data }: BillboardProps) {

	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, []);

	if(!isMounted) return null

  return (
    <ReactFitty>{data.label}</ReactFitty>
  );
}
