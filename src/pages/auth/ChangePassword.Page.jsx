import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import styled from "./auth.module.css";
import { twMerge } from "tailwind-merge";
import { apiHooks } from "../../redux/createApis";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeAuth } from "../../redux/authSlice";
import { ChevronLeft } from "lucide-react";

export default function ChangePasswordPage() {
  const dispatch = useDispatch();
  const { useChangePasswordMutation } = apiHooks;
  const [changePassword, { isLoading, isError, error, isSuccess }] =
    useChangePasswordMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await changePassword(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(removeAuth());
    }
  }, [isSuccess]);
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
            <h1 className=" text-2xl font-semibold mb-3">Change Password</h1>
            <div className=" font-medium">
              <span>Go</span>{" "}
              <Link to={-1} className=" text-blue-900 font-semibold">
                Back!
              </Link>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit} className=" space-y-5 my-3">
            <div className="">
              <Input
                type="password"
                name="current_password"
                className=" w-full"
                size={"lg"}
                label="Current Password"
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
              {isLoading ? "Loading" : "Change"}
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
