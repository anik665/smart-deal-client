import React, { use } from "react";
import { AuthContex } from "../contex/AuthContex";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContex);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  if (user && user?.email) {
    return children;
  }
  return (
    <Navigate state={{ from: location }} to={"/resister"} replace></Navigate>
  );
};

export default PrivateRoute;
