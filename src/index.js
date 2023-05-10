import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/Home";
import CodeSandbox from "./pages/CodeSandbox/CodeSandbox";
import Heart from "./pages/Heart/Heart";
import Spin from "./pages/Spin/Spin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/codesandbox",
    element: <CodeSandbox />,
  },
  {
    path: "/heart",
    element: <Heart />,
  },
  {
    path: "/spin",
    element: <Spin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
