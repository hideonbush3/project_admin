import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../front/component/Footer";
import Footer_2 from "./component/Footer_2";

export default function Index() {
  return (
    <>
      <h1>header자리</h1>
      <Outlet />
      <Footer_2 />
    </>
  );
}