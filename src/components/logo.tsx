'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";

interface LogoProps { }

export function Logo({ }: LogoProps) {
	const router = useRouter();
	return (
		<Button variant='ghost' onClick={() => router.push('/')}>
			<Image
				src="/images/logoRemove.png"
				alt="Logo"
				width={100}
				height={10}
				className="cursor-pointer"
			/>
		</Button>
	)
}
