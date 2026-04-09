import React, { use } from "react";
import Product from "../Product/Product";

const LatestProducts = ({ latestproducts }) => {
  const products = use(latestproducts);
  console.log(products);
  return (
    <div className="mx-auto w-full">
      <h2 className="font-bold text-5xl text-center my-5">
        Recent <span className="text-primary">Product</span>
      </h2>
      <div className="grid grid-cols-3 mx-auto w-full">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
