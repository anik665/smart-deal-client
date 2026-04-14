import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layout/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import AllProducts from "./components/allProducts/AllProducts.jsx";
import Resister from "./components/res/Resister.jsx";
import AuthProvider from "./contex/AuthProvider.jsx";
import Myproducts from "./components/Myproducts/Myproducts.jsx";
import MyBids from "./components/MyBids/MyBids.jsx";
import Login from "./components/log/Login.jsx";
import ProductsDetails from "./components/ProductsDetails/ProductsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/allproducts", Component: AllProducts },
      { path: "/resister", Component: Resister },
      { path: "/login", Component: Login },
      { path: "/myProducts", element: <Myproducts></Myproducts> },
      { path: "/mybids", element: <MyBids></MyBids> },
      {
        path: "/productsDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductsDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
);
