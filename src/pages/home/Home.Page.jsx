import { Link } from "react-router-dom";
import { Link2, StickyNote } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <div className=" container mx-auto grid place-items-center min-h-[70vh]">
        <div className=" space-y-7">
          <div className=" p-2 rounded-md border flex items-center gap-3 w-fit">
            <button className=" px-2 py-1 rounded-md bg-gray-900 text-white font-medium text-sm">
              Meta
            </button>
            <Link
              to={"https://github.com/MgHtetMyatAung/FM-Template"}
              className=" text-gray-800 font-medium underline flex items-center gap-3 pe-3"
            >
              <Link2 />
              Get Template
            </Link>
          </div>
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold text-gray-600 leading-relaxed lg:leading-snug">
            React , Redux Toolkit & RTK Query Template
          </h1>
          <div className=" pt-3 md:pt-5">
            <p className=" mb-3 text-gray-700 flex flex-col md:flex-row md:items-center gap-2">
              You can download and customize yourself{" "}
            </p>
            <Link
              to={"/docs"}
              className=" text-blue-600 font-semibold flex items-center gap-2"
            >
              <StickyNote size={18} />
              Read Docs
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
