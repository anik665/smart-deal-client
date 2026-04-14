import React, { useContext, useRef } from "react";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router";
import { AuthContex } from "../../contex/AuthContex";

const ProductsDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const bidsModalRef = useRef(null);
  const handelbidsModel = () => {
    bidsModalRef.current.showModal();
  };
  const {
    _id,
    title,
    image,
    price_min,
    price_max,
    condition,
    usage,
    description,
    created_at,
    seller_image,
    seller_name,
    seller_contact,
    status,
    location,
    email,
  } = data;
  // console.log(title);

  if (!data) {
    return <div>Loading or Product not found...</div>;
  }
  const { user } = useContext(AuthContex);
  console.log(user);
  const HandelBIds = (e) => {
    e.preventDefault();
    const form = e.target;
    const buyerName = form.name.value;
    const buyerEmail = form.email.value;
    // const contact = form.contact.value;
    // const img = form.ImgUrl.value;
    const price = form.price.value;
    // const contact = form.contact.value;
    const bidsInfo = {
      product: _id,
      buyer_Name: buyerName,
      buyer_email: buyerEmail,
      bids_price: price,
    };
    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bidsInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log("after data post ", data));
  };

  return (
    <div className="bg-[#D9D9D9]">
      <div className=" flex gap-10 mx-auto w-360 p-5">
        <div className="  w-150">
          <img src={image} className="w-full" alt="" />
          <div className="bg-[#FFFFFF] p-3 rounded-lg mt-8 ">
            <h2 className="font-bold my-7">Product Description</h2>
            <div className=" flex justify-between">
              <p className="font-semibold">
                <span className="text-primary">Conditons : </span>
                {condition}
              </p>
              <p className="font-semibold">
                <span className="text-primary">Usage Times : </span>
                {usage}
              </p>
            </div>
            <div className="bg-gray-400 h-px my-1"></div>
            <p className="text-[#969A9D]">{description}</p>
          </div>
        </div>
        {/* 2nd part */}
        <div className=" mt-3.5 w-204.75 ">
          <button
            onClick={() => navigate(-1)}
            to={`/productsDetails/${_id}`}
            className="flex "
          >
            <span class="material-symbols-outlined">arrow_back</span> Back to
            home
          </button>
          <h2 className="font-bold text-5xl">{title}</h2>
          <div className=" bg-[#FFFFFF] p-4 rounded-lg mt-7">
            <h2 className="font-bold text-3xl text-[#4CAF50]">
              <span className="material-symbols-outlined">attach_money</span>
              {price_min}-{price_max}
            </h2>
            <p className="">Price start form</p>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-lg mt-7">
            <h2 className="font-bold">Product Details</h2>
            <p className="">
              <span className="font-semibold">Product id : </span>
              {_id}
            </p>
            <p className="">
              <span className="font-semibold">Posted : </span>
              {created_at}
            </p>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-lg mt-7">
            <h2 className="font-bold">Sellar Informarion</h2>
            <div className="flex justify-start">
              {seller_image ? (
                <img src={seller_image} alt="" />
              ) : (
                <div className="bg-gray-500  rounded-full w-6 h-6">n</div>
              )}
              <div className="">
                <h4 className="font-semibold">{seller_name}</h4>
                <p className="">{email}</p>
              </div>
            </div>
            <h3 className="">
              <span className="font-semibold">Location : </span>
              {location}
            </h3>
            <h3 className="">
              <span className="font-semibold">Contact : </span>
              {seller_contact}
            </h3>
            <h3 className="">
              <span className="font-semibold">Status : </span>
              {status}
            </h3>
          </div>
          <button
            onClick={handelbidsModel}
            className="bg-primary w-full text-white mt-4 rounded-lg p-2 "
          >
            I want Buy This Product
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog
            ref={bidsModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Give Seller Your Offered Price
              </h3>
              <form onSubmit={HandelBIds}>
                <div className="py-4 flex justify-between gap-2 ">
                  <div className="">
                    <h3 className="">Buyer Name</h3>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      defaultValue={user?.displayName}
                      className="input my-1"
                    />
                  </div>

                  <div className="">
                    <h3 className="">Buyer Email</h3>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      placeholder="Your email"
                      className="input my-1"
                    />
                  </div>
                </div>
                <div className=""></div>

                <fieldset className="fildset">
                  <h3 className="">Buyer Image URL</h3>
                  <input
                    type="text"
                    name="ImgUrl"
                    placeholder="https://...your_img_url"
                    defaultValue={user?.photoURL}
                    className="input w-full my-2"
                  />
                  <h3 className="">Place your Price</h3>
                  <input
                    type="text"
                    name="price"
                    placeholder="e.g. Artisan Roasters"
                    className="input w-full my-2"
                  />
                  <h3 className="">Contact Info</h3>
                  <input
                    type="text"
                    name="contact"
                    placeholder="e.g. +1-555-1234"
                    className="input my-2 w-full"
                  />
                </fieldset>

                <div className="modal-action flex justify-end items-center gap-3 ">
                  {/* if there is a button in form, it will close the modal */}

                  <button
                    type="button"
                    onClick={() => bidsModalRef.current.close()}
                    className=" border border-primary text-primary p-2 rounded-sm"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="bg-primary rounded-sm text-white p-2"
                  >
                    Submit Bids
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
