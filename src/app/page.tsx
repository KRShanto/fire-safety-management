import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const montserrat2 = Montserrat({ weight: "800", subsets: ["latin"] });
const montserrat3 = Montserrat({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div>
        <div
          className="flex justify-center gap-5 opacity-50"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="h-[150px] w-[128px] bg-[#ED1C24]"></div>
          <div className="h-[150px] w-[128px] bg-[#2D59A9]"></div>
        </div>

        <div
          style={{ ...montserrat.style, position: "relative", zIndex: 2 }}
          className="mt-5 flex flex-col items-center uppercase text-white"
        >
          <h2 className="text-[38px]">Welcome to</h2>
          <h1
            style={montserrat2.style}
            className="flex flex-col text-center leading-[6rem]"
          >
            <span className="text-[104px]">Fire & safety</span>
            <span className="text-[64px]">management</span>
          </h1>
          <p
            className="mt-3 w-[40rem] text-center text-lg capitalize leading-8"
            style={montserrat3.style}
          >
            Empowering Sustainable Safety Excellence with Proven Expertise in
            Fire, Safety, and Emergency Management
          </p>

          <div className="mt-5 flex gap-10 text-lg font-bold">
            <button className="rounded-md bg-[#ED1C24] px-10 py-3">
              Learn More
            </button>
            <button className="rounded-md border-2 px-10 py-3">
              Contact Us
            </button>
          </div>
        </div>

        <div
          className="mt-10 flex justify-center gap-5 opacity-50"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="h-[170px] w-[128px] bg-[#ED1C24]"></div>
          <div className="h-[170px] w-[128px] bg-[#2D59A9]"></div>
        </div>
      </div>
    </div>
  );
}
