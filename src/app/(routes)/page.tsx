import { Container } from "@/components/ui/container";
import getProducts from "../../../actions/get-products";
import { ProductList } from "@/components/product-list";
import Footer from "@/components/footer";
import CarouselClient from "@/components/carousel-client";
import { CategoriesList } from "@/components/categories-list";
import getCategories from "../../../actions/get-categories";
import { SalesList } from "@/components/sales-list";
import { Faq } from "@/components/faq";
import { FillingInfo } from "@/components/filling-info";

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const productsCarousel = await getProducts({ onCarousel: true });
  const productsOnSale = await getProducts({ onSale: true });
  const categories = await getCategories();

  return (
    <div className="bg-neutral-50 dark:bg-gradient-to-b 
		dark:from-[#070707] dark:to-neutral-950">
      <Container>
        {/* CAROUSEL */}
        <div className="flex items-center justify-center">
          <CarouselClient productsCarousel={productsCarousel} />
        </div>

        {/* CATEGORIES */}
        <div className="mt-3 w-full xl:px-0 px-3 ">
          <CategoriesList categories={categories} />
        </div>

        {/* FEATURED */}
        <div className="my-4 mt-20 w-full">
          <div className="flex flex-col gap-y-0 px-2 xl:px-0">
            <div className="flex flex-col space-y-10">
              <h1 className="text-5xl font-semibold dark:text-neutral-100">
                Featured Products
              </h1>
              <ProductList items={products} />
            </div>

            {/* SALE */}

            <div className="my-4 mt-20 flex w-full flex-col space-y-10 pb-10">
              <h1 className="text-5xl font-semibold dark:text-neutral-100">
                On Sale
              </h1>
              <SalesList items={productsOnSale} />
            </div>


            {/* INFO SECTION */}

            <Faq />

						<FillingInfo />

						
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
