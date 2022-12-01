import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Component/Shared/SocialLogin";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import useToken from "../Shared/UseToken";

const LogIn = () => {
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  if (loading) {
    return <Loading />;
  }
 

  let logInError;
  if (error) {
    logInError = <p className="text-red-500">{error?.message}</p>;
  }

  return (
    <div className="hero min-h-screen login-bg">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg1">
          <h2 className="text-center text-2xl mt-2 text-white">Login</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  className="input input-bordered bg-blue-200 w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "please provide a valid email",
                    },
                  })}
                />

                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email?.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email?.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  className="input input-bordered w-full bg-blue-200 max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                      message:
                        "Minimum six characters, at least one letter and one number",
                    },
                  })}
                />

                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password?.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password?.message}
                    </span>
                  )}
                </label>
              </div>

              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white"
                >
                  Forgot password?
                </a>
              </label>
              {logInError}
              <div className="form-control mt-6">
                <button className="btn btn-accent text-white">Login</button>
              </div>
              <div className="flex justify-center mt-3">
                <small className="text-accent mr-1">New to CarFinders?</small>
                <small
                  onClick={() => navigate("/signup")}
                  className="text-primary cursor-pointer text-white"
                >
                  Create new account
                </small>
              </div>
            </form>

            <div className="flex justify-between items-center text-white">
              <div className="dive8"></div>
              OR
              <div className="dive8"></div>
            </div>

            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
