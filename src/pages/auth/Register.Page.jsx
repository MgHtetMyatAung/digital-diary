import { apiHooks } from "../../redux/createApis";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import styled from "./auth.module.css";
import { twMerge } from "tailwind-merge";

export default function RegisterPage() {
  const { useRegisterMutation } = apiHooks;
  console.log(apiHooks);
  const [register, { isLoading, isError, error }] = useRegisterMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await register(formData);
  };

  return (
    <section className=" w-full h-screen grid grid-cols-1 lg:grid-cols-2">
      <main
        className={twMerge(
          " w-full h-full bg-blue-400 hidden lg:block",
          styled.auth
        )}
      ></main>
      <main className=" w-full h-full grid place-items-center">
        <div className=" min-w-full p-5 md:min-w-[350px]">
          <div className="">
            <h1 className=" text-2xl font-semibold mb-3">Sign Up</h1>
            <p className=" font-medium mb-1">
              If you already have an account register
            </p>
            <div className=" font-medium">
              <span>You can</span>{" "}
              <Link to={"/login"} className=" text-blue-900 font-semibold">
                Login here!
              </Link>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit} className=" space-y-5 mt-3">
            <div className="">
              <Input
                type="text"
                name="name"
                className=" w-full"
                size={"lg"}
                label="Name"
                autoComplete=""
                required
              />
            </div>
            <div className="">
              <Input
                type="email"
                name="email"
                className=" w-full"
                size={"lg"}
                label="Email"
                autoComplete=""
                required
              />
            </div>
            <div className="">
              <Input
                type="password"
                name="password"
                className=" w-full"
                size={"lg"}
                label="Password"
                autoComplete=""
                required
              />
            </div>
            <div className="">
              <Input
                type="password"
                name="password_confirmation"
                className=" w-full"
                size={"lg"}
                label="Confirm Password"
                autoComplete=""
                required
              />
            </div>
            <Button type="submit" loading={isLoading}>
              {isLoading ? "Loading" : "Register"}
            </Button>
            {isError ? (
              <p className=" text-red-500 text-sm">
                {String(error?.data?.message).split(".")[0]}
              </p>
            ) : (
              <p className=" text-red-500 opacity-0">hide text</p>
            )}
          </form>
        </div>
      </main>
    </section>
  );
}
