import { Montserrat } from "next/font/google";

export default function Hero() {
  return (
    <div>
      <div
        className="flex justify-center gap-5 opacity-50"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="bg-primary h-[150px] w-[128px]"></div>
        <div className="h-[150px] w-[128px] bg-[#2D59A9]"></div>
      </div>

      <div
        style={{ position: "relative", zIndex: 2 }}
        className="font-montserrat mt-5 flex flex-col items-center font-semibold uppercase text-white"
      >
        <h2 className="text-[38px]">Welcome to</h2>
        <h1 className="font-montserrat flex flex-col text-center font-extrabold leading-[6rem]">
          <span className="text-[104px]">Fire & safety</span>
          <span className="text-[64px]">management</span>
        </h1>
        <p className="font-montserrat mt-3 w-[40rem] text-center text-lg capitalize leading-8">
          Empowering Sustainable Safety Excellence with Proven Expertise in
          Fire, Safety, and Emergency Management
        </p>

        <div className="mt-5 flex gap-10 text-lg font-bold">
          <button className="bg-primary rounded-md px-10 py-3">
            Learn More
          </button>
          <button className="rounded-md border-2 px-10 py-3">Contact Us</button>
        </div>
      </div>

      <div
        className="mt-10 flex justify-center gap-5 opacity-50"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="bg-primary h-[150px] w-[128px]"></div>
        <div className="h-[150px] w-[128px] bg-[#2D59A9]"></div>
      </div>
    </div>
  );
}
