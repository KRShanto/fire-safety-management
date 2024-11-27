import { Montserrat } from "next/font/google";

export default function Hero() {
  return (
    <div className="xl2:h-[80vh] xl3:h-[78vh] flex h-[77vh] flex-col justify-between md:h-[74] xl:h-[77vh] 2xl:h-[80vh] xl4:h-[80.5vh]">
      <div
        className="flex max-h-[40%] justify-center gap-3 opacity-50"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="h-[110px] w-[120px] bg-primary md:h-[130px] 2xl:h-[160px] 2xl:w-[120px]"></div>
        <div className="h-[110px] w-[120px] bg-[#2D59A9] md:h-[130px] 2xl:h-[160px] 2xl:w-[120px]"></div>
      </div>

      {/* Middle Content */}
      <div
        className="flex flex-grow flex-col items-center justify-center font-montserrat font-semibold uppercase text-white"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h2 className="relative text-[20px] md:top-2 md:text-[24px] 2xl:text-[28px]">
          Welcome to
        </h2>
        <h1 className="flex flex-col text-center font-extrabold leading-tight md:mt-2 md:leading-[4rem] 2xl:leading-[5rem]">
          <span className="text-[48px] md:text-[64px] 2xl:text-[80px]">
            Fire & Safety
          </span>
          <span className="text-[32px] md:text-[40px] 2xl:text-[56px]">
            Management
          </span>
        </h1>
        <div className="mt-2 w-[80%] text-center font-poppins text-sm leading-5 md:w-[10%] md:text-base md:leading-7 lg:w-[50%]">
          Empowering Sustainable Safety Excellence with Proven Expertise in
          Fire, Safety, and Emergency Management
        </div>

        <div className="mt-4 flex gap-4 text-sm font-bold md:gap-8 md:text-base">
          <button className="rounded-md bg-primary px-5 py-2 md:px-7 md:py-3 2xl:py-3">
            Learn More
          </button>
          <button className="rounded-md border-2 px-5 py-2 md:px-7 md:py-3 2xl:py-3">
            Contact Us
          </button>
        </div>
      </div>

      <div
        className="mt-8 flex max-h-[40%] justify-center gap-3 opacity-50 2xl:mt-10"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="h-[110px] w-[120px] bg-primary md:h-[130px] 2xl:h-[160px] 2xl:w-[120px]"></div>
        <div className="h-[110px] w-[120px] bg-[#2D59A9] md:h-[130px] 2xl:h-[160px] 2xl:w-[120px]"></div>
      </div>
    </div>
  );
}
