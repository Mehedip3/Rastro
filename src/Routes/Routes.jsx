import {
    createBrowserRouter,
 
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Contract from './../Pages/Contract/Contract';
import Order from "../Pages/Order/Order/Order";



   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        
        {
          path: 'contract',
          element: <Contract></Contract>
        },


        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order',
          element: <Order></Order>
        }
      ]
    },
  ]);