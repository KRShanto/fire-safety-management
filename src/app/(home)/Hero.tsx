import { Montserrat } from "next/font/google";

export default function Hero() {
  return (
    <div className=" h-[76.8vh] 2xl:h-[80.8vh]">
      <div
        className="flex justify-center gap-5 opacity-50"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="bg-primary h-[80px] w-[120px] 2xl:h-[150px] 2xl:w-[120px]"></div>
        <div className="h-[80px] w-[120px] bg-[#2D59A9] 2xl:h-[150px] 2xl:w-[120px]"></div>
      </div>

      <div
        style={{ position: "relative", zIndex: 2 }}
        className="font-montserrat mt-5 flex flex-col items-center font-semibold uppercase text-white max-h-[500px] 2xl:max-h-[1000px]"
      >
        <h2 className="text-[34px] 2xl:text-[38px] ">Welcome to</h2>
        <h1 className="font-montserrat flex flex-col text-center font-extrabold leading-[6rem]">
          <span className="text-[98px] 2xl:text-[104px">Fire & safety</span>
          <span className="text-[58px] 2xl:text-[64px]">management</span>
        </h1>
        <p className="font-montserrat mt-3 w-[40rem] text-center text-lg capitalize leading-8">
          Empowering Sustainable Safety Excellence with Proven Expertise in
          Fire, Safety, and Emergency Management
        </p>

        <div className="mt-5 flex gap-10 text-lg font-bold">
          <button className="bg-primary rounded-md px-8 py-2 2xl:py-3">
            Learn More
          </button>
          <button className="rounded-md border-2 px-8 py-2 2xl:py-3">Contact Us</button>
        </div>
      </div>

      <div
        className="mt-8 flex justify-center gap-5 opacity-50 h-[600px]  2xl:mt-10 "
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="bg-primary h-[50%] w-[120px] 2xl:w-[120px]"></div>
        <div className="h-[50%] w-[120px] bg-[#2D59A9] 2xl:w-[120px]"></div>
      </div>
    </div>
  );
}
