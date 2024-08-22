'use client'

import { useRouter } from "next/navigation";

interface LogoProps { }

export function Logo({ }: LogoProps) {
	const router = useRouter();
	return (
		<>

			<h1
				className="text-black dark:text-neutral-100 font-bold text-3xl cursor-pointer dark:hover:text-neutral-50 transition-colors"
				onClick={() => router.push('/')} 
			>
				Alkeymist
			</h1>

		</>
	)
}
