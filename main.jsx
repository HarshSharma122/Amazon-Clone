import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import Login from "./components/login/login.jsx";
import Layout from "./layout.jsx";
import { StateProvider } from "./components/StateProvider.jsx";
import reducer, { initialState } from "./reducer.js";
import Checkout from "./components/checkout/checkout.jsx";
import Boys from "./components/boys/Boys.jsx";
import Girls from "./components/girls/Girls.jsx";
import ChildData from "./components/childData/ChildData.jsx";
import ShoesData from "./components/shoesData/ShoesData.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/checkout", 
        element:<Checkout/>
      },
      {
        path:"/boys", 
        element:<Boys/>
      },
      {
        path:"/girls", 
        element:<Girls/>
      },
      {
        path:"/child", 
        element:<ChildData/>
      },
      {
        path:"/shoes", 
        element:<ShoesData/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <RouterProvider router={router} />
    </StateProvider>
  </StrictMode>
);
