import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import CryptoDetails from "./components/CryptoDetails"   

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path:"/",
        element: <Crypto />,
        children : [
          {
            path: ":coinId",
            element:<CryptoDetails/>
          }
        ]
      },
      {
        path:"/trending",
        element: <Trending />,
      },
      {
        path:"/saved",
        element: <Saved />,
       
      }
    ]


  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);