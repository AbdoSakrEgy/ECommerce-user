import React from "react";
import Hero from "../Organisms/Hero";
import Products from "../Organisms/Products";
import Footer from "../Organisms/Footer";
import Navbar from "../Organisms/Navbar";

export default function Home() {
  return (
    <>
      <Navbar firstColor={"#f5e6e0"} secondColor={"#ffffff"} />
      <Hero />
      <Products />
      <Footer />
    </>
  );
}
