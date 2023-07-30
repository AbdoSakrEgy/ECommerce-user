import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Organisms/Navbar";

export default function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}
