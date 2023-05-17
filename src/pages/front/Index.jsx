import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../front/component/Footer";
import Header from "./component/Header";

export default function Index() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}