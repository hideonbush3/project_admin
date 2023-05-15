import React from 'react';
import {Outlet} from "react-router-dom";

// /myinfo/Xxx  myinfo이하 url들의 공통 부분을 정하는 곳

export default function UserInfo() {
  return (
    <>
        <h1>MyInfo 시작점</h1>
        <Outlet />
    </>
  );
}