import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Organisms/Navbar";
import Hero from "../Organisms/Hero";
import Products from "../Organisms/Products";
import Footer from "../Organisms/Footer";

export default function Root() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Products/>
      <Outlet />
      <Footer/>
    </>
  );
}
