import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const CarsInfo = () => {
  const navigate = useNavigate()
  const {carcategory} = useParams();
  console.log(carcategory);
  const [categoryCar, setCategoryCar] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/home`).then((res) => {
      const carCategory = res.data;
      const brandCar = carCategory.filter(car => car.name.toLowerCase().includes(carcategory.toLowerCase()))
      setCategoryCar(brandCar)
    });
  }, []);
 
  return (
    <div className="bg-zinc-300 p-16 rounded-tl-full grid grid-cols-4 gap-6 justify-center items-center h-full mx-auto">
      {
        categoryCar.map(car => <div className="card  bg-base-100 shadow-2xl ">
        <figure className="px-10 pt-10">
          <img
            src={car?.photo}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-start text-center">
          <h2 className="card-title">Name: {car?.name}</h2>
          <p>location: {car?.location}</p>
          <p>resale price:{car?.resale_price} </p>
          <p>Original price: {car?.original_price} </p>
          <p>Used time: {car?.used_time}</p>
          <p>Seller: {car?.seller_name}</p>
          <div className="card-actions">
            <button  onClick={() => navigate(`/purchase/${car?._id}`)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>)
      }
      
     
    </div>
  );
};

export default CarsInfo;
