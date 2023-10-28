import React from "react";
import { Outlet } from "react-router-dom";
import PalestineFlag from "../Atoms/PalestineFlag";

export default function Root() {
  return (
    <>
      <Outlet />
      <div className="sticky w-full bottom-0 left-0">
        <PalestineFlag />
      </div>
    </>
  );
}
