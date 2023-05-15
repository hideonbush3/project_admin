import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../front/component/Footer";

export default function Index() {
  return (
    <>
      <h1>header자리</h1>
      <Outlet />
      <Footer />
    </>
  );
}