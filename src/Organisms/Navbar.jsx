import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import ShoppingBagBadge from "../Atoms/ShoppingBagBadge";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openCloseSidebar } from "../Redux/productsSlice";
import Sidebar from "../Molecules/Sidebar";
import { useLocation } from "react-router-dom";

export default function Navbar({ firstColor, secondColor }) {
  const dispatch = useDispatch();
  const [isNavbarTopSite, setIsNavbarTopSite] = useState(true);

  const [style, setStyle] = useState(null);

  useEffect(() => {
    changeColor();
  }, []);

  const changeColor = () => {
    //scroll points go up as the page is scrolled down
    if (window.scrollY <= 0) {
      setIsNavbarTopSite(true);
      setStyle(
        `flex justify-between px-[10vw] py-5 sticky top-0 z-20 ease-in duration-200 bg-[${firstColor}]`
      );
    } else {
      setIsNavbarTopSite(false);
      setStyle(
        `flex justify-between px-[10vw] py-5 sticky top-0 z-20 ease-in duration-200 shadow-lg bg-[${secondColor}]`
      );
    }
  };
  // every part of this function is necessary.
  //It won't work if you emit the ", true" parameter
  window.addEventListener("scroll", changeColor, true);

  return (
    <>
      <div
        // className={
        //   isNavbarTopSite
        //     ? `flex justify-between px-[10vw] py-5 sticky top-0 z-20 ease-in duration-200 bg-[#f5e6e0]`
        //     : `flex justify-between px-[10vw] py-5 sticky top-0 z-20 shadow-lg ease-in duration-200 bg-[#ffffff]`
        // }
        className={style}
      >
        <div>
          <Link to={"/ecommerce-app-clientside"}>
            <Icon icon="mdi:clothes-hanger" width="40" />
          </Link>
        </div>
        <div
          onClick={() => {
            dispatch(openCloseSidebar());
          }}
          className="relative hover:cursor-pointer"
        >
          <Icon icon="ci:shopping-bag-02" width="40" />
          <ShoppingBagBadge />
        </div>
        <Sidebar />
      </div>
    </>
  );
}
