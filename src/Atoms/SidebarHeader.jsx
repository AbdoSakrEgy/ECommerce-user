import React from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { openCloseSidebar } from "../Redux/productsSlice";
import numberOfProudctsInCart from "./numberOfProductsInCart";

export default function SidebarHeader() {
  const { productsInCart } = useSelector((state) => state.products);
  const dispatch = useDispatch();


  return (
    <>
      <span>SHOPPING BAG ({numberOfProudctsInCart(productsInCart)})</span>
      <div
        onClick={() => {
          dispatch(openCloseSidebar());
        }}
        className="hover:cursor-pointer"
      >
        <Icon icon="maki:arrow" width={30} />
      </div>
    </>
  );
}
