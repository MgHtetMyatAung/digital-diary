import { Button } from "@material-tailwind/react";
import { FlowerImg } from "../../assets/images";
import { Typography } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { apiHooks } from "../../redux/createApis";

export default function RegisterPage() {
  const { useRegisterMutation } = apiHooks;
  const [register, { isLoading, isError, error, data }] = useRegisterMutation();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await register(formData);
  };
  console.log(data);
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
                Sign Up
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register.
              </Typography>
              <form
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                onSubmit={handleSignUp}
              >
                <div className="mb-1 flex flex-col gap-6">
                  <Input
                    type=" text"
                    name="name"
                    size="lg"
                    placeholder=""
                    label="User Name"
                    required
                  />

                  <Input
                    type="email"
                    name="email"
                    size="lg"
                    placeholder="name@mail.com"
                    label="Email"
                    required
                  />

                  <Input
                    type="password"
                    name="password"
                    size="lg"
                    label="Password"
                    required
                  />
                </div>
                <p className=" text-red-500 min-h-[20px] mt-3">
                  {isError ? error.data.message : ""}
                </p>
                <div>
                  <Button type="submit" className="mt-6" loading={isLoading}>
                    {isLoading ? "loading" : "sign up"}
                  </Button>
                </div>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Already have an account?{" "}
                  <Link to={"/login"} className="font-medium text-gray-900">
                    Sign In
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
