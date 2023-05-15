import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import Admin from "./pages/admin/Admin";
import Index from "./pages/front/Index";
import UserInfo from "./pages/myinfo/UserInfo";
import Home from "./pages/admin/pages/Home";
import Join from "./pages/front/pages/Join";
import MyInfo from "./pages/admin/pages/MyInfo";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Index />,
    children: [
      {path: "join", element: <Join />}
    ]
  },
  {
    path:'/admin',
    element:<Admin />,
    children: [
      {index: true, element: <Home />},
      {path: "myinfo", element: <MyInfo />},
    ]
  },
  {
    path:'/myinfo',
    element:<UserInfo />,
    children: []
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
