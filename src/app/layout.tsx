import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import { ModalProvider } from "../../providers/modal-provider";
import ToasterProvider from "../../providers/toaster-provider";

const DM = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Alkeymist",
	description:
		"Alkeymist is a custom keyboards e-commerce store. We offer a wide range of custom keyboards, keycaps, and accessories.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={DM.className}>
				<ToasterProvider />
				<ModalProvider />
				<Navbar />
				{children}
			</body>
		</html>
	);
}

