import React, { use, useEffect, useState } from "react";
import { AuthContex } from "../../contex/AuthContex";
import Swal from "sweetalert2";

const MyBids = () => {
  const [bids, setbids] = useState([]);
  const { user } = use(AuthContex);
  console.log(user.accessToken);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setbids(data);
        });
    }
  }, [user]);

  const handelDelet = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(`http://localhost:3000/bids/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          const remainBids = bids.filter((bid) => bid._id !== _id);
          setbids(remainBids);
        });
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto  ">
      <h1 className=" text-center text-2xl font-bold my-4 ">
        My Bids <span className="text-primary"> : {bids.length}</span>
      </h1>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Product</th>
              <th>Buyer info </th>
              <th>Bids Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bids.map((bid, index) => (
              <tr key={bid._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{bid.product}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{bid.buyer_Name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{bid.bids_price}</td>
                <td>Pending</td>
                <th>
                  <button
                    onClick={() => handelDelet(bid._id)}
                    className="btn btn-outline btn-xs"
                  >
                    Remove Bid
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
