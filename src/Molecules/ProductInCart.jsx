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
        <header className="flex flex-col lg:justify-between items-center lg:items-start h-32 w-full">
          <figure className="basis-1/4 h-full overflow-hidden">
            <img
              src={productInCart.image}
              alt="image not found"
              className="lg:w-[80%] w-full h-full"
            />
          </figure>
          <section className="flex flex-col basis-2/3">
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
        {/* <section className="flex justify-start items-center w-[80%]">
          <figure className="w-[30%] h-28">
            <img
              src={productInCart.image}
              alt="image not found"
              className="lg:w-[80%] w-full h-full"
            />
          </figure>
          <div className="ml-5 flex flex-col w-[70%]">
            <span className="font-semibold">{productInCart.category}</span>
            <span className="flex justify-start items-center mt-3">
              <IncDecProduct productInCart={productInCart} />
              <span className="opacity-50">$ {productInCart.price}</span>
            </span>
          </div>
        </section>
        <section className="flex flex-col items-end flex-shrink w-[20%]">
          <button
            className="opacity-60"
            onClick={() =>
              dispatch(removeAllSameProductsByUsingId(productInCart.id))
            }
          >
            <Icon icon="ic:round-close" width={25} />
          </button>
          <span className="mt-3 font-semibold">
            $ {productInCart.price * productInCart.repeatNumInCart}
          </span>
        </section> */}
      </main>
    </>
  );
}
