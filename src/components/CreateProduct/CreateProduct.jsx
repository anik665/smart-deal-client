import React from "react";
import useAuth from "../../hooks/useAuth";
// import axios from "axios";
import Swal from "sweetalert2";
// import useAxiosInstance from "../../hooks/useAxionInstance";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CreateProduct = () => {
  const { user } = useAuth();
  // const axiosInstace = useAxiosInstance();
  const AxiosSecure = useAxiosSecure();
  const HandelCreateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const ImageUrl = form.ImageUrl.value;
    const price_max = form.price_max.value;
    const price_min = form.price_min.value;
    const newProduct = {
      title,
      ImageUrl,
      price_max,
      price_min,
      email: user.email,
      buyer_email: user.displayName,
    };
    AxiosSecure.post("/products", newProduct).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Your Product has been created.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      }
    });
  };
  return (
    <div>
      <form
        onSubmit={HandelCreateProduct}
        className=" w-full max-w-2xl mx-auto my-10 border p-4 rounded-lg "
      >
        <div className="py-4 flex justify-between gap-2 ">
          <div className="">
            <h3 className="">Title</h3>
            <input
              type="text"
              name="title"
              placeholder="Place Your Product Title"
              className="input my-1"
            />
          </div>

          <div className="">
            <h3 className="">ImageUrl</h3>
            <input
              type="text"
              name="ImageUrl"
              placeholder=" Place Your Product Image Url"
              className="input my-1"
            />
          </div>
        </div>
        <div className=""></div>

        <fieldset className="fildset">
          <h3 className="">Price_Max</h3>
          <input
            type="text"
            name="price_max"
            placeholder="Place Your Price_max"
            className="input w-full my-2"
          />
          <h3 className="">Place your Price_Min</h3>
          <input
            type="text"
            name="price_min"
            placeholder="Place Your Price_min"
            className="input w-full my-2"
          />
        </fieldset>
        <button className=" btn btn-primary"> CreateProduct </button>
      </form>
    </div>
  );
};

export default CreateProduct;
