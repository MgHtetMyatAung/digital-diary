import { Button } from "@material-tailwind/react";
import { FlowerImg } from "../../assets/images";
import { Typography } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { apiHooks } from "../../redux/createApis";

export default function LoginPage() {
  const { useLoginMutation } = apiHooks;
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await login(formData);
  };
  return (
    <main>
      <section className=" h-screen grid lg:grid-cols-2">
        <div className=" hidden lg:block">
          <img
            src={FlowerImg}
            alt=""
            className=" w-full h-screen object-bottom"
          />
        </div>
        <div className=" w-full h-screen grid place-items-center">
          <div className=" md:min-w-[400px]">
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray">
                Sign In
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to Login.
              </Typography>
              <form
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                onSubmit={handleLogin}
              >
                <div className="mb-1 flex flex-col gap-6">
                  <Input
                    type="email"
                    name="email"
                    size="lg"
                    placeholder="name@mail.com"
                    className=" "
                    label="Email"
                    required
                  />
                  <Input
                    type="password"
                    name="password"
                    size="lg"
                    className=" "
                    label="Password"
                    autoComplete="true"
                    required
                  />
                </div>
                <p className=" text-red-500 h-[20px] mt-3">
                  {isError ? error.data.message : ""}
                </p>
                <div>
                  <Button type="submit" className="mt-3" loading={isLoading}>
                    {isLoading ? "loading" : "sign in"}
                  </Button>
                </div>

                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Don't have an account?{" "}
                  <Link to={"/register"} className="font-medium text-gray-900">
                    Sign Up
                  </Link>
                </Typography>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
