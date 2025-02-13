"use client";

import { Billboard as BillboardType } from "@/types/types";
import { useEffect, useState } from "react";
//@ts-ignore
import { ReactFitty } from "react-fitty";
import { AnimatePresence, cubicBezier, motion } from "framer-motion";
import { cubicBezierVariant } from "@/lib/motion-variants";

interface BillboardProps {
  data: BillboardType;
}

export default function Billboard({ data }: BillboardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: cubicBezierVariant }}
			>
				<ReactFitty><p className="font-semibold">{data.label}</p></ReactFitty>
			</motion.div>
		</AnimatePresence>
  );
}
