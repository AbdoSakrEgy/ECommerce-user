import React from "react";
import "./palestine.css";

export default function PalestineFlag() {
  return (
    <div>
      {/* free palestine  */}
      <div class="relative w-full h-[60px] flex flex-col">
        <span class="h-[20px] w-full bg-black"></span>
        <span class="h-[20px] w-full bg-white"></span>
        <span class="h-[20px] w-full bg-[#027c3f]"></span>
        <div class="absolute triangle-right top-0 left-0"></div>
      </div>
      {/* <div class="w-full h-[60px] flex justify-center items-center">
        <span class="relative w-[98%] h-[52px] flex flex-col justify-center rounded-lg overflow-hidden">
          <span class="h-[18px] w-full bg-black"></span>
          <span class="h-[18px] w-full bg-white"></span>
          <span class="h-[18px] w-full bg-[#027c3f]"></span>
          <div class="absolute triangle-right top-0 left-0"></div>
        </span>
      </div> */}
      {/* free palestine  */}
    </div>
  );
}
