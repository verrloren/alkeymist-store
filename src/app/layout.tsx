import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google"
import Navbar from "@/components/navbar/navbar";
import ModalProvider from "../../providers/modal-provider";
import ToasterProvider from "../../providers/toaster-provider";
import ThemeProvider from "../../providers/theme-provider"
import MenuModalProvider from "../../providers/menu-modal-provider";
import getCategories from "../../actions/get-categories";
// import MarqueeComponent from "@/components/marquee-component";
import FilterModalProvider from "../../providers/filter-modal-provider";
import getSizes from "../../actions/get-sizes";
import getProducts from "../../actions/get-products";

const DM = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Alkeymist",
	description:
		"Alkeymist is a custom keyboards e-commerce store. We offer a wide range of custom keyboards, keycaps, and accessories.",
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode,
}>) {


	const categories = await getCategories();
	const sizes = await getSizes();
	const prices = await getProducts({
		price: "",
		newprice: ""
	});
		

	return (
		<html lang="en">
			<body className={DM.className}>
				{/* <MarqueeComponent /> */}
				<ToasterProvider />
				<ModalProvider />
				<MenuModalProvider categories={categories} />
				<FilterModalProvider 
					sizes={sizes} 
					prices={prices}
				/>
				<Navbar />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>

					{children}
				</ThemeProvider>
				
			</body>
		</html>
	);
}

