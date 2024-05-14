import { Button } from "@material-tailwind/react";
import { FlowerImg } from "../../assets/images";
import { Typography } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
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
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  <Input
                    type=" text"
                    size="lg"
                    placeholder=""
                    label="User Name"
                    required
                  />

                  <Input
                    type="email"
                    size="lg"
                    placeholder="name@mail.com"
                    label="Email"
                    required
                  />

                  <Input type="password" size="lg" label="Password" required />
                </div>
                <div>
                  <Button className="mt-6">sign up</Button>
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
