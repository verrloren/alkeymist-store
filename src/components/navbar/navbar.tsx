import { MainNav } from "@/components/navbar/main-nav";
import { Container } from "@/components/ui/container";
import getCategories from "../../../actions/get-categories";
import NavbarActions from "./navbar-actions";
import { Logo } from "../logo";

interface NavbarProps {}


export default async function Navbar({}: NavbarProps) {

	const categories = await getCategories();

	return (
		<div className="w-full bg-white border-b">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-14 items-center">
					<Logo />
					<MainNav data={categories} />
					<NavbarActions />
				</div>
			</Container>
		</div>
	)
}