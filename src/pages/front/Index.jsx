import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../front/component/Footer";
import Footer_2 from "./component/Footer_2";
import Header from "./component/Header";

export default function Index() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer_2 />
    </>
  );
}