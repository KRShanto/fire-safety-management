import { url } from "inspector";
import { Alumni_Sans, Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <div
      className="relative flex items-center justify-center bg-[#F9F6EE] p-20 pb-40"
      style={{
        backgroundImage: "url(/Partners-bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="stroke absolute left-10 top-[60%] z-10 origin-left -translate-y-1/2 rotate-[270deg] transform font-alumni text-5xl font-bold uppercase 2xl:text-7xl 2xl:left-20">
        Partners
      </h2>
      <div className="flex min-w-[1200px] max-w-[1200px] gap-20">
        <div>
          <div className="z-20">
            <h2 className="font-montserrat text-3xl font-bold">
              Our Proud <br />
              <span className="text-primary">Internal Manufacturers</span>
            </h2>

            <p className="z-20 mt-5 w-[35rem]">
              Our partnerships with esteemed international suppliers underline
              our dedication to providing the finest quality safety and fire
              management products available globally. These collaborations
              enable us to bring world-class technology and innovation right to
              your doorstep. Our suppliers are leaders in the safety industry,
              renowned for their reliability and cutting-edge solutions.{" "}
            </p>

            <button className="mt-5 rounded-md bg-primary px-10 py-3 text-sm font-semibold text-white">
              View Details
            </button>
          </div>
        </div>

        <div className=" grid w-[700px] grid-cols-3 gap-x-5 gap-y-2 ">
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
    </div>
  );
}
