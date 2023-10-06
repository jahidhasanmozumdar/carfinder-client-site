import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CarsInfo = () => {
  const navigate = useNavigate();
  const { carcategory } = useParams();
  console.log(carcategory);
  const [categoryCar, setCategoryCar] = useState([]);
  useEffect(() => {
    axios.get(`https://carfinder-server-site.vercel.app/home`).then((res) => {
      const carCategory = res.data;
      const brandCar = carCategory.filter((car) =>
        car.name.toLowerCase().includes(carcategory.toLowerCase())
      );
      setCategoryCar(brandCar);
    });
  }, []);

  return (
    <div className="bg-zinc-300 rounded-tl-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-y-[16px] h-full mx-auto mb-[50px]">
      {categoryCar.map((car) => (
        <div className="max-w-[400px] min-h-[570px] max-h-[570px] bg-base-100 shadow-2xl ">
          <figure className="px-10 pt-10">
            <img src={car?.photo} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <h2 className="card-title">Name: {car?.name}</h2>
            <p>location: {car?.location}</p>
            <p>resale price:{car?.resale_price} </p>
            <p>Original price: {car?.original_price} </p>
            <p>Used time: {car?.used_time}</p>
            <p>Seller: {car?.seller_name}</p>
            <div className="card-actions">
              <button
                onClick={() => navigate(`/purchase/${car?._id}`)}
                className="btn btn-primary"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarsInfo;
