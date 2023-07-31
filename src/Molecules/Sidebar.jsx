import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductInCart from "./ProductInCart";
import OptionsForCartProducts from "./OptionsForCartProducts";
import SidebarHeader from "../Atoms/SidebarHeader";

export default function Sidebar() {
  const { IsSidebarOpen, productsInCart } = useSelector(
    (state) => state.products
  );

  return (
    <>
      <div
        className={`${
          IsSidebarOpen ? "right-0" : "-right-full"
        } fixed top-0 h-screen w-[40%] ease-in duration-300 shadow-xl z-30 bg-white`}
      >
        <div className="flex flex-col h-full">
          {/* 1 */}
          <div className="flex justify-between items-center mx-12 py-5 h-[10%] font-bold border-b">
            <SidebarHeader />
          </div>
          {/* 2 */}
          <div className="h-[65%] mx-12 py-5 overflow-auto">
            {productsInCart.map((productInCart) => (
              <ProductInCart key={productInCart.id} productInCart={productInCart}/>
            ))}
          </div>
          {/* 3 */}
          <div className="flex flex-col h-[25%] mx-12 py-5 pt-10 border-t">
            <OptionsForCartProducts />
          </div>
        </div>
      </div>
    </>
  );
}
