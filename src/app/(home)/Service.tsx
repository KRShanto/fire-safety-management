import { Alumni_Sans, Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const services = [
  {
    src: "/Service1.png",
    title: "Emergency Evacuation process Training",
  },
  {
    src: "/Service2.png",
    title: "Basic Fire Training",
  },
  {
    src: "/Service3.png",
    title: "Basic Safety Training",
  },
  {
    src: "/Service4.png",
    title: "Accident/Incident Investigation",
  },
];

export default function Service() {
  return (
    <div className="relative flex flex-col items-center bg-[#F9F6EE] p-20">
      <h2 className="stroke absolute left-10 top-[60%] z-10 origin-left -translate-y-1/2 rotate-[270deg] transform font-alumni text-7xl font-bold uppercase">
        Service
      </h2>

      <h2 className="mb-4 font-montserrat text-4xl font-bold uppercase">
        What <span className="text-primary">professional training</span> we
        offer
      </h2>

      <p className="w-[60rem] text-center">
        Take a look at our comprehensive range of fire safety services tailored
        to meet your needs. From risk assessment to emergency response training,
        we ensure your environment is secure and compliant.
      </p>

      <div className="mt-10 flex gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative top-0 transition-all duration-300 hover:top-[-1rem]"
          >
            <Image
              src={service.src}
              width={300}
              height={300}
              alt={service.title}
            />
            <h3 className="absolute left-[50%] top-[50%] w-full -translate-x-1/2 text-center font-montserrat text-xl font-bold text-white">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      <button className="mt-10 rounded-md bg-primary px-10 py-3 font-bold text-white">
        Learn More
      </button>
    </div>
  );
}
