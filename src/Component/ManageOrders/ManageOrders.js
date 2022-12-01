import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const handleProductDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast("successfully delete item");
      });
  };
  return (
    <div className="my-6 mt-32">
      <div className="overflow-x-auto  w-full mx-auto ">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProducts?.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {product?.name.slice(0, 30) + "..."}
                      </div>
                     
                    </div>
                  </div>
                </td>
                <td>
                  {product?.userName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {product?.email}
                  </span>
                </td>
                <td>{product?.resale_price}</td>
                <td>
                  <button
                    onClick={() => handleProductDelete(product._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
