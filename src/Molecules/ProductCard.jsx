import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function ProductCard({ cardData }) {
  return (
    <>
      <div className="flex flex-col min-h-[450px] w-64 bg-base-100 shadow-none rounded-none mb-5">
        <div className="flex justify-center items-center group h-[300px] relative overflow-hidden border border-gray-500">
          <img
            className="h-[60%] max-w-[70%] group-hover:scale-110 transition duration-300"
            src={cardData.image}
            alt={cardData.title}
          />
          {/* buttons */}
          <div className="flex flex-col absolute top-6 -right-12 group-hover:right-5 transition-all duration-300">
            <button className="flex justify-center items-center h-12 w-12 mb-2 shadow-xl bg-red-500 text-white">
              <Icon icon="octicon:plus-16" width="20" />
            </button>
            <Link
              to={"/"}
              className="flex justify-center items-center h-12 w-12 shadow-xl bg-white"
            >
              <Icon icon="mdi:eye" color="black" width="20" />
            </Link>
          </div>
          {/* buttons */}
        </div>
        <div className="h-[150px] overflow-hidden">
          <div className="opacity-70">{cardData.category}</div>
          <Link>
            <div className="font-bold">{cardData.title}</div>
          </Link>
          <div className="font-semibold">$ {cardData.price}</div>
        </div>
      </div>
    </>
  );
}
