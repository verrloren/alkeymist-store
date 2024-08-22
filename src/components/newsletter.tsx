'use client'

import { useState } from "react"

interface NewsletterProps {}

export function Newsletter({}: NewsletterProps) {

	const [inputEmail, setInputEmail] = useState('')

	const handleChange = (e: any) => {
		setInputEmail(e.target.value)
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault()

		alert(inputEmail)
		await fetch('/api/emails', { 
			method: 'POST',
			body: JSON.stringify({
				email: inputEmail,
				firstName: "Dan"
			})
		 })
	}

	return (
		<div className="w-full ">
			<form name="newsletter" onSubmit={handleSubmit} className="w-full flex md:items-start md:justify-start items-start justify-start">
				<input
					value={inputEmail}
					onChange={handleChange}
					type="email"
					placeholder="Your email address..."
					required
					className="w-[60%] bg-white  p-2 border border-neutral-300 border-r-0
					dark:border-neutral-800 rounded-l-md rounded-bl-md focus:outline-none 
					focus:border  focus:border-neutral-800 focus:border-transparent placeholder-neutral-600
					dark:focus:border dark:focus:border-neutral-700 dark:text-white dark:bg-transparent "
					
				/>
				<button
					type="submit"
					className="w-28 p-2 bg-neutral-900 dark:bg-neutral-950 
					text-neutral-100
					border-l dark:text-neutral-400
					focus:outline-none border border-neutral-900 
					rounded-tr-md rounded-br-md hover:bg-neutral-800 
					transition-colors  dark:hover:text-neutral-300 dark:hover:border-neutral-700 
					focus:border-transparent  dark:border-neutral-800"
				>
					Subscribe
				</button>
			</form>
		</div>
	)
}
