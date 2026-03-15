import React from "react";
import Navber from "../components/navbar/Navber";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
};

export default RootLayout;
