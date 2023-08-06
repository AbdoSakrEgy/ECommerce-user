import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import ShoppingBagBadge from "../Atoms/ShoppingBagBadge";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openCloseSidebar } from "../Redux/productsSlice";
import Sidebar from "../Molecules/Sidebar";
import { useLocation } from "react-router-dom";
import ProfileAvatar from "../Atoms/ProfileAvatar";

export default function Navbar({ isInHomePage }) {
  const dispatch = useDispatch();
  const [isNavbarTopSite, setIsNavbarTopSite] = useState(true);
  const [isNavbarInHomePage, setIsNavbarInHomePage] = useState(false);

  useEffect(() => {
    changeColor();
  }, []);

  const changeColor = () => {
    //scroll points go up as the page is scrolled down
    if (window.scrollY <= 0) {
      setIsNavbarTopSite(true);
      setIsNavbarInHomePage(isInHomePage);
    } else {
      setIsNavbarTopSite(false);
      setIsNavbarInHomePage(isInHomePage);
    }
  };
  // every part of this function is necessary.
  //It won't work if you emit the ", true" parameter
  window.addEventListener("scroll", changeColor, true);

  return (
    <>
      <div
        className={
          isNavbarTopSite
            ? isNavbarInHomePage
              ? "flex justify-between px-[10vw] py-5 sticky top-0 z-20 ease-in duration-200 bg-[#f5e6e0]"
              : "flex justify-between px-[10vw] py-5 sticky top-0 z-20 ease-in duration-200 bg-[#ffffff]"
            : `flex justify-between px-[10vw] py-5 sticky top-0 z-20 shadow-lg ease-in duration-200 bg-[#ffffff]`
        }
      >
        <div>
          <Link to={"/ecommerce-app-clientside"}>
            <Icon icon="mdi:clothes-hanger" width="40" />
          </Link>
        </div>
        <div className="flex justify-between gap-5">
          <div
            onClick={() => {
              dispatch(openCloseSidebar());
            }}
            className="relative hover:cursor-pointer"
          >
            <Icon icon="ci:shopping-bag-02" width="40" />
            <ShoppingBagBadge />
          </div>
          <ProfileAvatar />
        </div>
        <Sidebar />
      </div>
    </>
  );
}
