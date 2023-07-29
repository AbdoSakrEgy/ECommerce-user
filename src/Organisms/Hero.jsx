import React from "react";
import heroimg from "../assets/img/man_hero_img.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="HeroBackground bg-cover bg-no-repeat bg-center h-[600px] overflow-hidden">
        <div className="flex justify-center items-center mx-auto">
          <div className="flex flex-col justify-around">
            <div className="flex items-center font-semibold uppercase">
              <div className="w-10 h-1 mr-2 bg-red-500"></div>NEW TREND
            </div>
            <div className="text-[70px] leading-[1.1] font-light mb-4">
              AUTUMN SALE STYLISH
              <br />
              <div className="font-semibold">MENS</div>
            </div>
            <Link to={'/'} className="uppercase font-semibold w-fit border-b-2 border-black">DISCOVER MORE</Link>
          </div>
          <img src={heroimg} alt="no image" className="h-[600px]" />
        </div>
      </div>
    </>
  );
}
