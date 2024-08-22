'use client';

import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat("en-Us", {
	style: "currency",
	currency: "USD"
})

interface CurrencyProps {
	value?: string | number;
	oldprice?: boolean;
}

export default function Currency({ value, oldprice }: CurrencyProps) {

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<div className={`font-medium text-[1.1rem]  dark:text-neutral-300
			${oldprice && "line-through text-neutral-500 dark:text-neutral-600 "} `}
>
			{formatter.format(Number(value))}
		</div>
	)
}
