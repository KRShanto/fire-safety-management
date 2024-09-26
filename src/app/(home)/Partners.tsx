import { Alumni_Sans, Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const alumniSans = Alumni_Sans({ subsets: ["latin"], weight: "700" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

export default function Partners() {
  return (
    <div className="relative flex items-center justify-center bg-[#F9F6EE] p-20 pb-40">
      <h2
        className="stroke absolute left-10 top-[60%] z-10 origin-left -translate-y-1/2 rotate-[270deg] transform text-7xl font-bold uppercase"
        style={alumniSans.style}
      >
        Partners
      </h2>

      <Image
        src="/Partners-bg.png"
        width={1200}
        height={500}
        alt="Partners"
        className="absolute"
      />

      <div className="z-20">
        <h2 className="text-3xl" style={montserrat.style}>
          Our Proud <br />
          <span className="text-[#ED1C24]">Internal Manufacturers</span>
        </h2>

        <p className="mt-5 w-[35rem]">
          Our partnerships with esteemed international suppliers underline our
          dedication to providing the finest quality safety and fire management
          products available globally. These collaborations enable us to bring
          world-class technology and innovation right to your doorstep. Our
          suppliers are leaders in the safety industry, renowned for their
          reliability and cutting-edge solutions.{" "}
        </p>

        <button className="mt-5 rounded-md bg-[#ED1C24] px-10 py-3 text-sm font-semibold text-white">
          View Details
        </button>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-x-5 gap-y-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`relative ${index % 3 === 1 ? "mt-5" : "-mt-5"}`}
          >
            <Image
              src={`/Partner${index + 1}.png`}
              width={200}
              height={200}
              alt="Partners"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
