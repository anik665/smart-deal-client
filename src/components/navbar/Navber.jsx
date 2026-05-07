import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContex } from "../../contex/AuthContex";

const Navber = () => {
  const { user, signOuts } = useContext(AuthContex);
  const handelSignOUt = () => {
    signOuts()
      .then(() => console.log("signOut successFull"))
      .catch((err) => console.log(err));
  };
  const Links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/allproducts"}>Allproducts</NavLink>
      </li>
      <li>
        <NavLink to={"/resister"}>Resister</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/myProducts"}>My Products</NavLink>
          </li>
          <li>
            <NavLink to={"/mybids"}>MyBids</NavLink>
          </li>
          <li>
            <NavLink to={"/createProduct"}>Create Product</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">
            Smart
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
              deal
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <a onClick={handelSignOUt} className="btn">
              SignOut
            </a>
          ) : (
            <>
              <Link className="btn" to={"/login"}>
                Login
              </Link>

              <Link className="btn-gradient" to={"/resister"}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
