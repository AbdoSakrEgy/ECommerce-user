import React from "react";
import IncDecProduct from "../Atoms/IncDecProduct";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllSameProductsByUsingId } from "../Redux/productsSlice";

export default function ProductInCart({ productInCart }) {
  const dispatch = useDispatch();

  return (
    <>
      <main className="flex justify-between items-center w-full border-b py-5 px-3 lg:py-10 lg:px-5">
        <header className="flex flex-col md:flex-row md:justify-between md:gap-3 items-center md:items-start h-32 w-full">
          <figure className="basis-2/3 md:basis-1/4 h-full flex justify-center items-center overflow-hidden">
            <img
              src={productInCart.image}
              alt="image not found"
              className="w-auto h-full"
            />
          </figure>
          <section className="flex flex-col w-full basis-1/4 md:basis-3/4 h-full justify-between">
            <div className="flex justify-between">
              <span className="font-semibold">{productInCart.category}</span>
              <button
                className="opacity-60"
                onClick={() =>
                  dispatch(removeAllSameProductsByUsingId(productInCart.id))
                }
              >
                <Icon icon="ic:round-close" width={25} />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <IncDecProduct productInCart={productInCart} />
              <span className="opacity-50">$ {productInCart.price}</span>
              <span className="font-semibold">
                $ {productInCart.price * productInCart.repeatNumInCart}
              </span>
            </div>
          </section>
        </header>
      </main>
    </>
  );
}
