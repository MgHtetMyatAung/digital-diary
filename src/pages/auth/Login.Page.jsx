import { Link } from "react-router-dom";
import { apiHooks } from "../../redux/createApis";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import styled from "./auth.module.css";
import { twMerge } from "tailwind-merge";
import { ChevronLeft } from "lucide-react";

export default function LoginPage() {
  const { useLoginMutation } = apiHooks;
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await login(formData);
  };

  console.log(error, isError);
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
            <h1 className=" text-2xl font-semibold mb-3">Sign In</h1>
            <p className=" font-medium mb-1">
              {`If you don't have an account register`}
            </p>
            <div className=" font-medium">
              <span>You can</span>{" "}
              <Link to={"/register"} className=" text-blue-900 font-semibold">
                Register here!
              </Link>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit} className=" space-y-5 mt-3">
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
            <Button type="submit" loading={isLoading}>
              {isLoading ? "Loading" : "Login"}
            </Button>
            {isError ? (
              <p className=" text-red-500 text-sm">
                {String(error?.data?.message).split(".")[0]}
              </p>
            ) : (
              <p className=" text-red-500 opacity-0">hide text</p>
            )}
          </form>
          <Link to={"/"} className=" flex items-center gap-3">
            <ChevronLeft /> Home Page
          </Link>
        </div>
      </main>
    </section>
  );
}
