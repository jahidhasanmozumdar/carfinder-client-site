import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaUser } from "react-icons/fa";
import { GoLocation, GoMailRead } from "react-icons/go";
import { TiSocialGooglePlus } from "react-icons/ti";

const Footer = () => {
  return (
    <div style={{ background: "#0d1c2f" }} className="pb-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg w-5/6 mx-auto">
        <div className="section-one mt-8">
          <div className="flex items-center justify-start text-white py-4">
            <h1 className="text-5xl">
              <FaUser />
            </h1>
            <div className="px-3">
              <small>Call Customer Services, We Support 24/7 </small>
              <p className="text-sm">800-140-10000</p>
            </div>
          </div>

          <div className="flex items-center justify-start text-white py-4">
            <h1 className="text-5xl">
              <GoLocation />
            </h1>
            <div className="px-3">
              <small>Address :</small>
              <p className="text-sm">North Americas Avenue, El Paso, Texas</p>
            </div>
          </div>

          <div className="flex items-center justify-start text-white py-4">
            <h1 className="text-5xl">
              <GoMailRead />
            </h1>
            <div className="px-3">
              <small>Email :</small>
              <p className="text-sm">Support@developer.com</p>
            </div>
          </div>
        </div>
        <div className="section-two text-white mt-12">
          <h2>CUSTOMER SERVICE</h2>
          <div className="flex flex-col gap-3 mt-5">
            <small>Contact us</small>
            <small>Help and advice</small>
            <small>Shipping & Returns</small>
            <small>Terms and conditions</small>
            <small>Refund Policy</small>
          </div>
        </div>
        <div className="section-three mt-12 text-white">
          <h2>NEWLETTERS</h2>
          <div className="block justify-center items-center mt-4 h-18 sm:flex">
            <input
              className="p-3 rounded"
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL ADDRESS"
              id=""
            />
            <button className="text-white p-3 rounded bg-orange-500 mx-2 mt-2 sm:mt-0">
              SUBSCRIBE
            </button>
          </div>
          <div className="flex mt-6 gap-4 text-3xl">
            <small>
              <FaFacebookF />
            </small>
            <small>
              <TiSocialGooglePlus />
            </small>
            <small>
              <BsTwitter />
            </small>
            <small>
              <BsInstagram />
            </small>
          </div>
        </div>
      </div>
      <div style={{ height: "1px" }} className="bg-gray-300 w-full mt-6"></div>
      <div className="lg:max-w-screen-lg w-5/6  mx-auto flex-col flex sm:flex-row justify-between text-white mt-6">
        <small className="py-2">
          Copyright © 2022 JANAFI it LTD. All rights reserved.
        </small>
        <img
          src="http://images.vinovathemes.com/prestashop_anico/payment.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
