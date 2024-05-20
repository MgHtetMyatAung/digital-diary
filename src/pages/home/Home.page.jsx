import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className=" ">
      <section className=" container mx-auto min-h-[85vh] flex items-center">
        <div>
          <h2 className=" text-[30px] text-gray-800 md:text-[54px] font-bold">
            Digital Diary For Every Moment
          </h2>
          <p className=" text-lg text-gray-700 leading-snug tracking-wide mt-[20px] md:mt-[20px]">
            Welcome to Digital Diary, where your story takes center stage. Our
            platform offers a digital sanctuary for your memories, musings, and
            reflections. Embrace each moment and watch as your journey unfolds,
            beautifully chronicled in your personalized digital diary. Start
            documenting your life today with Digital Diary.
          </p>
          <Link to={"/login"}>
            <Button className=" mt-[40px] ">Start Now</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
