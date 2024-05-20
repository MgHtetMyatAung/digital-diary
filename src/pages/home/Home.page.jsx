import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className=" ">
      <section className=" container mx-auto min-h-[85vh] flex items-center">
        <div>
          <h2 className=" text-[36px] text-gray-800 md:text-[64px] font-bold">
            Digital Diary
          </h2>
          <p className=" text-lg text-gray-700 leading-snug tracking-wide mt-[20px] md:mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta
            fuga itaque maxime dolorem saepe molestiae minus voluptas! Aperiam
            blanditiis aliquam numquam facere eveniet aut porro sapiente id quas
            deleniti
          </p>
          <Link to={"/login"}>
            <Button className=" mt-[40px] ">Start Now</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
