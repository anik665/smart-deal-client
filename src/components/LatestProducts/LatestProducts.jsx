import React, { use } from "react";
import Product from "../Product/Product";

const LatestProducts = ({ latestproducts }) => {
  const products = use(latestproducts);
  console.log(products);
  return (
    <div>
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
