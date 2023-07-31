import React from "react";
import IncDecProduct from "../Atoms/IncDecProduct";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllSameProductsByUsingId } from "../Redux/productsSlice";

export default function ProductInCart({ productInCart }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between items-center w-full border-b py-10 px-5">
        <div className="flex justify-start items-center w-[80%]">
          <div className="w-[30%] h-28">
            <img
              src={productInCart.image}
              alt="image not found"
              className="w-[80%] h-full"
            />
          </div>
          <div className="ml-5 flex flex-col w-[70%]">
            <span className="font-semibold">{productInCart.category}</span>
            <span className="flex justify-start items-center mt-3">
              <IncDecProduct productInCart={productInCart} />
              <span className="opacity-50">$ {productInCart.price}</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end flex-shrink w-[20%]">
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
        </div>
      </div>
    </>
  );
}
