import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { _id, title, image, price_min, price_max } = product;
  console.log(title, image);
  return (
    <div>
      <div className="card bg-base-100 w-96 h-110  shadow-sm  ">
        <div className=" p-3 card-body  border-2 border-gray-200 ">
          <img className="h-69" src={image} alt="" />
          <h2 className="card-title text-left">{title}</h2>
          <p className="flex items-center text-primary font-medium ">
            <span className="material-symbols-outlined">attach_money</span>
            {price_min}-{price_max}
          </p>

          <Link to={`/productsDetails/${_id}`}>
            <button className="border border-primary w-full text-primary p-2 rounded-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
