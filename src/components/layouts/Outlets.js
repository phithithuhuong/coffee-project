import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export function Outlets() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}
