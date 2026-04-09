import React from "react";
import LatestProducts from "../LatestProducts/LatestProducts";
import Bannar from "../Banner/Bannar";

const latestProductsPRomise = fetch(
  "http://localhost:3000/latest-products",
).then((res) => res.json());
const Home = () => {
  return (
    <div className="w-[1240px] mx-auto">
      <Bannar></Bannar>
      <LatestProducts latestproducts={latestProductsPRomise}></LatestProducts>
    </div>
  );
};

export default Home;
