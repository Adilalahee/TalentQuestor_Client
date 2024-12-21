import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../pages/Home";
import Register from "../pages/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;