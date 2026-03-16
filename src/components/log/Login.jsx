import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // fake 2s delay
    console.log(data);
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="mx-auto">
              <h2 className="font-semibold  text-[#00font1931] text-3xl">
                Login
              </h2>
              <p className="">
                Don't have an account?{" "}
                <Link className="text-primary" to={"/resister"}>
                  {" "}
                  Register
                </Link>{" "}
                Now
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  {...register("email", { required: "Email is Required" })}
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-error">{errors.email.message}</p>
                )}
                <label className="label">Password</label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-error">{errors.password.message}</p>
                )}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  className="btn btn-neutral mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "loging..." : "Login"}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
