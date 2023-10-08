import React from "react";
import { RiSteering2Line } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
const SellingData = () => {
  return (
    <div className="min-w-[1100px] max-w-[1100px] mx-auto mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[50px]">
        <div className="flex justify-center items-center gap-x-[50px]">
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <FaAward className="text-[50px]"></FaAward>
            <p>Total Awards</p>
            <p className="count-num text-secondary text-3xl font-bold">32</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <AiFillCar className="text-[50px]"></AiFillCar>
            <p>Car Sold Month</p>
            <p className="count-num text-secondary text-3xl font-bold">500</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <RiSteering2Line className="text-[50px]"></RiSteering2Line>
            <p>Available Brands</p>
            <p className="count-num text-secondary text-3xl font-bold">20</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-medium">
            Along with 1000s of cars to choose from, you can apply for finance
            online and value your existing car all from the comfort of your
            favorite armchair.
          </p>
          <p className="text-lg font-medium mt-4">
            In line with our commitment to treating customers fairly, you can
            find more information about Charles Hurst complaints policy here.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SellingData;
