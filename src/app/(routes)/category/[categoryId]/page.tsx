import { Container } from "@/components/ui/container";
import getCategory from "../../../../../actions/get-category";
import getProducts from "../../../../../actions/get-products";
import getSizes from "../../../../../actions/get-sizes";
import Billboard from "@/components/billboard";
import Filter from "./components/filter";
import { NoResults } from "@/components/ui/no-results";
import { ProductCard } from "@/components/ui/product-card";
import { MobileFilters } from "./components/mobile-filters";
import { Settings2 } from "lucide-react";
import Footer from "@/components/footer";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const category = await getCategory(params.categoryId);

  return (
    <>
      <div className="relative w-full min-h-[100svh] bg-neutral-50 dark:bg-[#070707]">
        {/* <div className="fixed right-0 top-0 w-72 h-[100dvh] bg-transparent 
				border-l border-neutral-800 flex justify-start mt-40 cursor-pointer"> */}
        {/* <h1 className="font-bold text-7xl text-neutral-200">
						Filter
					</h1> */}
        {/* <div className="hidden md:block w-full">
                <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              </div> */}
        {/* </div> */}


        <MobileFilters sizes={sizes} />

        <Container>
          <div className="w-full px-4 pt-8 sm:px-6 lg:px-0 lg:pt-0">
            <Billboard data={category.billboard} />
          </div>
          <div className="px-4 pb-16 sm:px-6 lg:px-8">
            {/* <div className="md:flex items-center gap-x-1 hidden">
              <Settings2 className="text-neutral-100" />
              <h3 className="font-semibold text-neutral-100">Filters</h3>
            </div> */}

            <div className="">
              {/* <div className="hidden md:block">
                <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              </div> */}

              <div className="mt-6 lg:col-span-3 lg:mt-0">
                {products.length === 0 && <NoResults />}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {products.map((product) => (
                    <ProductCard key={product.id} data={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
