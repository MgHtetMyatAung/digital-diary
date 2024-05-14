import { Button } from "@material-tailwind/react";

export default function HomePage() {
  return (
    <main className=" ">
      <section className=" container mx-auto min-h-[100vh] flex items-center">
        <div>
          <h2 className=" text-[36px] text-gray-700 md:text-[64px] font-bold">
            Digital Diary
          </h2>
          <p className=" text-lg text-gray-600 leading-snug tracking-wide mt-[20px] md:mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta
            fuga itaque maxime dolorem saepe molestiae minus voluptas! Aperiam
            blanditiis aliquam numquam facere eveniet aut porro sapiente id quas
            deleniti
          </p>
          <Button className=" mt-[40px] ">Start Now</Button>
        </div>
      </section>
    </main>
  );
}
