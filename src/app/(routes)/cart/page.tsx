"use client";

import { Container } from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import { CartItem } from "./components/cart-item";
import Summary from "./components/summary";



export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className="w-full min-h-[85svh] bg-neutral-50 dark:bg-[#070707]">
        <Container>
          <div className="w-full pt-12 px-8 xl:px-0">
            <div className="mt-4 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                {cart.items.length === 0 && (
									<div className="flex flex-row items-center">
										<p className="text-neutral-900 dark:text-neutral-200 text-2xl font-light">No items added to cart</p>
									</div>
                )}
                <ul>
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              </div>

              <Summary />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
