import React from "react";
import "../../style/style.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="flex flex-col justify-center items-center h-full mx-auto">
        <h2 className="text-4xl  font-bold">Find the Car You Want, Your Way</h2>
        <p className="text-2xl">Then, build your deal to fit your needs.</p>
        <div className=" flex gap-5 my-4">
          <button className="text-white font-semibold px-8 py-2 bg-blue-500 rounded-md">
            Shop Used Car
          </button>
          <button className="text-white font-semibold px-8 py-2 bg-blue-500 rounded-md">
            Sell your Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
