import React from "react";
import { RiSteering2Line } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import CountUp from "react-countup";
const SellingData = () => {
  return (
    <div className="w-4/5 mx-auto mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  place-items-center gap-x-[50px]">
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <FaAward className="text-[50px]"></FaAward>
            <p>Total Awards</p>
            <CountUp
              delay={2}
              end={30}
              className="count-num text-secondary text-3xl font-bold"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <AiFillCar className="text-[50px]"></AiFillCar>
            <p>Car Sold Month</p>

            <CountUp
              delay={2}
              end={500}
              className="count-num text-secondary text-3xl font-bold"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <RiSteering2Line className="text-[50px]"></RiSteering2Line>
            <p>Available Brands</p>

            <CountUp
              delay={2}
              end={20}
              className="count-num text-secondary text-3xl font-bold"
            />
          </div>
        </div>
        <div>
          <p>
            Along with 1000s of cars to choose from, you can apply for finance
            online and value your existing car all from the comfort of your
            favorite armchair. In line with our commitment to treating customers
            fairly, you can find more information about Charles Hurst complaints
            policy here.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SellingData;
