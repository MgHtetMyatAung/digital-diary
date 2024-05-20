import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className=" w-full h-screen grid place-items-center">
      <div className=" text-center">
        <p className=" font-medium">Sorry Page Not Found !</p>
        <Link to={"/"}>
          <Button size="sm" className=" mt-3">
            Home
          </Button>
        </Link>
      </div>
    </section>
  );
}
