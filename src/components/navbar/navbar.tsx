import { Container } from "@/components/ui/container";
import getCategories from "../../../actions/get-categories";
import NavbarActions from "./navbar-actions";
import { Logo } from "../logo";
import { MenuNavbar } from "./menu-navbar";
import { MainNav } from "./main-nav";
import { SearchButton } from "./search-button";


export default async function Navbar() {
	
  const categories = await getCategories();

  return (
    <nav className="sticky top-0 z-10 w-full border-b border-neutral-200 bg-white py-2 backdrop-blur-md dark:border-b-0 dark:border-t dark:border-neutral-800 dark:bg-[#080808eb]">
      <Container>
        <div className="relative hidden h-20 items-center justify-between sm:px-6 md:flex lg:px-8 xl:px-0">
          <Logo />
          <MainNav data={categories} />
          <div className="flex items-center justify-center gap-x-0">
            <SearchButton />
            <NavbarActions />
          </div>
        </div>

        {/* MOBILE */}
        <div className="relative flex h-20 items-center justify-between px-4 sm:px-6 md:hidden lg:px-8 xl:px-0">
          <Logo />

          <div className="flex items-center justify-center">
            <SearchButton />
            <NavbarActions />
            <MenuNavbar categories={categories} />
          </div>
        </div>
      </Container>
    </nav>
  );
}
