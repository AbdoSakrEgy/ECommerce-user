import React, { useState } from "react";
import Navbar from "../Organisms/Navbar";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User name</span>
                </label>
                <input
                  {...register("user_name", {
                    required: "User name is required.",
                  })}
                  type="text"
                  placeholder="user name"
                  className="input input-bordered"
                />
                {errors.user_name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.user_name.message}
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("user_email", {
                    required: "Email is required.",
                  })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.user_email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.user_email.message}
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("user_password", {
                    required: "Password is required",
                    minLength: {
                      value: 4,
                      message: "Password must be more than 4 digits",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.user_password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.user_password.message}
                  </p>
                )}
              </div>

              <label className="label">
                <a className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
