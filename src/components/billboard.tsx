"use client";

import { Billboard as BillboardType } from "@/types/types";
import { ReactFitty } from "react-fitty";

interface BillboardProps {
  data: BillboardType;
}

export default function Billboard({ data }: BillboardProps) {
  return (
    <ReactFitty>{data.label}</ReactFitty>

  );
}
