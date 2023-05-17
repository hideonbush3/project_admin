import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../front/component/Footer";
import Footer_2 from "./component/Footer_2";

export default function Index() {
  return (
    <>
      <h1 style={{border:"1px solid #3B4CA8",margin:"0", color:"#3B4CA8"}}>엄클래스!</h1>
        <div style={{border:"1px solid #3B4CA8",height:"106px"}}>
            여기는 NAV자리, header와 합쳐 156px로 예상.
        </div>
      <Outlet />
      <Footer_2 />
    </>
  );
}