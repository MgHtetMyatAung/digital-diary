import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

export default function HomePage() {
  const { currentUser } = useAuth();
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
          <div className=" flex items-center gap-4">
            <Link to={currentUser?.id ? "/memos" : "/login"}>
              <Button className=" mt-[40px] ">Start Now</Button>
            </Link>
            <Link to={"/user-guide"}>
              <Button className=" mt-[40px]" variant="outlined">
                user guide
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
