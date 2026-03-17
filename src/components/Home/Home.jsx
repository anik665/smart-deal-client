import React from "react";
import LatestProducts from "../LatestProducts/LatestProducts";

const latestProductsPRomise = fetch(
  "http://localhost:3000/latest-products",
).then((res) => res.json());
const Home = () => {
  return (
    <div>
      <h3>home</h3>
      <LatestProducts latestproducts={latestProductsPRomise}></LatestProducts>
    </div>
  );
};

export default Home;
