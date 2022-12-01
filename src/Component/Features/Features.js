import React from "react";
import compare from "../../Asset/000-9.jpg";
import guide from "../../Asset/000-7.jpg";
import fuile from "../../Asset/000.png";

const Features = () => {
  return (
    <div className="my-11 w-4/5 mx-auto">
      <h1 className="text-2xl font-semibold underline flex justify-start items-center my-3">
        Featured-<span className="text-red-600">Articles</span>
      </h1>
      <div className="flex  gap-6">
        <div className="card w-2/5 bg-base-100 shadow-2xl ">
          <figure className="px-10 pt-10">
            <img src={compare} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-center">
            <h2 className="card-title">
              Car Comparison: Honda Vezel Vs Kia Sportage
            </h2>
            <p>
              As we’re living in the era of SUVs, competition between SUVs is
              quite natural. With a lot of good options, this sector of the car
              market is getting more challenging day by day. And among the SUVs,
              the Kia Sportage and Honda Vezel are very popular with Bangladeshi
              car...
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">see more</button>
            </div>
          </div>
        </div>
        <div className="card w-2/5 bg-base-100 shadow-2xl ">
          <figure className="px-10 pt-10">
            <img src={guide} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-center">
            <h2 className="card-title">
              Why You Should Buy A Car Online
            </h2>
            <p>
            Every automobile buyer is now confused about the process of purchasing a car online. In terms of internet shopping, ease is everything. Online car sales should not be an exception. The conventional way to buy a car was to go to a car dealer or a car showroom. However, since it is now possible to...
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">see more</button>
            </div>
          </div>
        </div>
        <div className="card w-2/5 bg-base-100 shadow-2xl ">
          <figure className="px-10 pt-10">
            <img src={fuile} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-center">
            <h2 className="card-title">
            Electric Cars vs Traditional Cars
            </h2>
            <p>
            The idea of a vehicle that runs on battery power is not a new invention. In fact, the idea of electric cars is just as old as gas-powered cars. What’s changed is the batteries, charging, range, and several other factors. But since the beginning of the automotive mindset, electricity has been a crucial part car...
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">see more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
