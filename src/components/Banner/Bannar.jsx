import React from "react";

const Bannar = () => {
  return (
    <div
      className="bg-cover bg-center h-[400px] w-full flex items-center justify-center mb-20"
      style={{ backgroundImage: "url('/img/Header (2).png')" }}
    >
      <div className="">
        <h2 className="text-7xl text-center text-[#001931] font-bold">
          Deal your <span className="text-primary">Products</span>
          <br />
          <span className="text-center">
            {" "}
            in a <span className="text-primary">Smart</span> way !
          </span>
        </h2>
        <p className="text-gray-400 mt-1.5 text-center">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>
        <div className="flex items-center justify-center my-4">
          {/* Standard Input Part */}
          <input
            type="text"
            placeholder="Search For Products, Categories..."
            className="input input-bordered input-md rounded-l-full focus:outline-none"
          />

          {/* Styled Search Icon Part */}
          <div className="bg-primary w-[50px] h-[40px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-all rounded-r-full">
            <span className="material-symbols-outlined text-white !text-2xl">
              search
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <button className="bg-primary rounded-sm text-white p-2">
            Watch All Products
          </button>
          <button className="border border-primary text-primary p-2 rounded-sm">
            Post an Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
