export default function HomePage() {
  return (
    <main>
      <div className=" container mx-auto grid place-items-center min-h-[50vh]">
        <div className=" space-y-5">
          <div className=" p-1 rounded-md border flex items-center gap-3 w-fit">
            <button className=" p-2 rounded-md bg-gray-900 text-white font-medium text-sm">
              Status
            </button>
            <span className=" me-5">Meta Version</span>
          </div>
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold text-gray-500 leading-tight">
            React Redux Toolkit & RTK Query Template
          </h1>
        </div>
      </div>
    </main>
  );
}
