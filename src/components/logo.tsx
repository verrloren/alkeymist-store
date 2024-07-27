'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";

interface LogoProps { }

export function Logo({ }: LogoProps) {
	const router = useRouter();
	return (
		<>

			{/* <div className="hidden sm:block">
				<Button variant='ghost' onClick={() => router.push('/')}>
					<Image
						src="/images/logoRemove.png"
						alt="Logo"
						width={100}
						height={100}
						className="cursor-pointer"
					/>
				</Button>
			</div>


			<div className="block sm:hidden">
				<Image
					src="/images/logoRemove.png"
					alt="Logo"
					width={100}
					height={100}
					className="cursor-pointer"
				/>
			</div> */}

			<h1
				className="text-black dark:text-neutral-100 font-bold text-3xl cursor-pointer dark:hover:text-neutral-50 transition-colors"
				onClick={() => router.push('/')} 
			>
				Alkeymist
			</h1>

		</>
	)
}
