import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import ShoppingBagBadge from "../Atoms/ShoppingBagBadge";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openCloseSidebar } from "../Redux/productsSlice";
import Sidebar from "../Molecules/Sidebar";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const [color, setColor] = useState(true);
  // const [locationPath, setLocationPath] = useState(
  //   useLocation().pathname.startsWith("/product/")
  // );
  let location = useLocation();
  let locationPath = useLocation().pathname;

  useEffect(() => {
    changeColor();
  }, [location]);

  const changeColor = () => {
    //scroll points go up as the page is scrolled down
    if (window.scrollY <= 0) {
      if (locationPath.startsWith("abdosakregy.github.io/ecommerce-app-clientside/product/")) {
        setColor(false);
      } else {
        setColor(true);
      }
      // console.log("true");
      // console.log(window.scrollY);
    } else {
      setColor(false);
      // console.log("false");
      // console.log(window.scrollY);
    }
  };
  // every part of this function is necessary.
  //It won't work if you emit the ", true" parameter
  window.addEventListener("scroll", changeColor, true);

  return (
    <>
      <div
        className={
          color
            ? "flex justify-between px-[10vw] py-5 sticky top-0 z-20 ease-in duration-200 bg-[#f5e6e0]"
            : "flex justify-between px-[10vw] py-5 sticky top-0 z-20 shadow-lg ease-in duration-200 bg-white"
        }
      >
        <div>
          <Link to={"/"}>
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
