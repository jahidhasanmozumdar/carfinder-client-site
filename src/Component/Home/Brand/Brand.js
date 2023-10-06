import React from "react";
import { useNavigate } from "react-router-dom";

const Brand = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-4xl my-4 text-center">Most Popular Brand</h2>
      <hr className="w-64  flex justify-center items-center h-full mx-auto " />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  place-items-center h-full mx-auto gap-[18px] my-6 text-black">
        <div
          onClick={() => navigate("/home/bmw")}
          className="bg-slate-200 max-w-[300px] border shadow-xl rounded-md"
        >
          <figure className="px-10 pt-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg"
              alt="Shoes"
              className="rounded-xl h-36 w-52"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Brand name: BMW!</h2>
          </div>
        </div>
        <div
          onClick={() => navigate("home/Mercedes")}
          className="bg-slate-200 max-w-[300px] border shadow-xl rounded-md"
        >
          <figure className="px-10 pt-10">
            <img
              src="https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854"
              alt="Shoes"
              className="rounded-xl h-36 w-52"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Brand name: Mercedes-Benz!</h2>
          </div>
        </div>
        <div
          onClick={() => navigate("home/Lamborghini")}
          className="bg-slate-200 max-w-[300px] border shadow-xl rounded-md"
        >
          <figure className="px-10 pt-10">
            <img
              src="https://1000logos.net/wp-content/uploads/2018/03/Lamborghini-logo.png"
              alt="Shoes"
              className="rounded-xl h-36 w-52"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Brand name: lamborghini!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
