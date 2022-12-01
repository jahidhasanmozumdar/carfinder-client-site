import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Loading from "../Shared/Loading";

const stripePromise = loadStripe(
  "pk_test_51M9NbMAL7GYvinvC4LAmoietJmNRlyMQA7gzdimzEfmjNtendQX3H5fCuDyDaDH9T6O7nGflA64iESOufCQtLDLr005MpUNCAI"
);

const Payment = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: orders,
  } = useQuery(["payment", id], () =>
    fetch(`http://localhost:5000/payment/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const { userName, price, name } = orders;

  return (
    <div>
      <div className="card w-2/3 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Hello, <span className="text-orange-600 font-bold">{userName}</span>
          </h2>
          <p>
            Your selected product{" "}
            <span className="text-orange-600 font-bold">{name}</span>
            confirm this payment for{" "}
            <span className="text-orange-600 font-bold">$ {price} </span>
          </p>
          <div className="mt-6">
            <Elements stripe={stripePromise}>
              <CheckoutForm orders={orders} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
