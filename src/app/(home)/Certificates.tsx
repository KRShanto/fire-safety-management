"use client";
import { Alumni_Sans, Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const alumniSans = Alumni_Sans({ subsets: ["latin"], weight: "700" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

const certificates = [
  {
    src: "/Certificate1.png",
    title: "We are ##RFSC CERTIFIED##",
    description:
      "At Fire and Safety Management, we pride ourselves on meeting the highest standards tof compliance and professionalism. Our RJSC certification is a testament to our commitment to legal and operational excellence in Bangladesh. This certification confirms our adherence to stringent regulations and our capability to provide reliable safety and fire management solutions. It not only enhances our credibility but also ensures that we are equipped to offer top-tier service, training, and consultancy in safety management.",
  },
  {
    src: "/Certificate2.png",
    title: "We are certified ##Chemical Supply Chain##",
    description:
      "At Fire and Safety Management, we pride ourselves on meeting the highest standards tof compliance and professionalism. Our RJSC certification is a testament to our commitment to legal and operational excellence in Bangladesh. This certification confirms our adherence to stringent regulations and our capability to provide reliable safety and fire management solutions. It not only enhances our credibility but also ensures that we are equipped to offer top-tier service, training, and consultancy in safety management.",
  },
  {
    src: "/Certificate3.png",
    title: "We are ##Safety, Fire & Emergency Response Specialist##",
    description:
      "At Fire and Safety Management, we pride ourselves on meeting the highest standards tof compliance and professionalism. Our RJSC certification is a testament to our commitment to legal and operational excellence in Bangladesh. This certification confirms our adherence to stringent regulations and our capability to provide reliable safety and fire management solutions. It not only enhances our credibility but also ensures that we are equipped to offer top-tier service, training, and consultancy in safety management.",
  },
];

export default function Certificates() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative flex justify-center bg-[#F9F6EE] p-20 pb-40">
      <h2
        className="stroke absolute right-10 top-[60%] z-10 origin-right -translate-y-1/2 rotate-[90deg] transform text-7xl font-bold uppercase"
        style={alumniSans.style}
      >
        Certificate
      </h2>
      {/* <div className="z-20 flex w-[90rem] items-center gap-44">
        <Image
          src="/Certificate1.png"
          alt="Certificates"
          width={500}
          height={500}
        />

        <div>
          <h2 style={montserrat.style} className="mb-4 text-4xl">
            We are <span className="text-[#ED1C24]">rjsc Certificate</span>
          </h2>
          <p>
            At Fire and Safety Management, we pride ourselves on meeting the
            highest standards tof compliance and professionalism. Our RJSC
            certification is a testament to our commitment to legal and
            operational excellence in Bangladesh. This certification confirms
            our adherence to stringent regulations and our capability to provide
            reliable safety and fire management solutions. It not only enhances
            our credibility but also ensures that we are equipped to offer
            top-tier service, training, and consultancy in safety management.
          </p>

          <button className="mt-10 rounded-md bg-[#ED1C24] px-10 py-3 text-sm font-bold text-white">
            Learn More
          </button>
        </div>
      </div> */}

      {certificates[current] && (
        <div className="z-20 flex w-[90rem] items-center gap-44">
          <Image
            src={certificates[current].src}
            alt="Certificates"
            width={500}
            height={500}
          />

          <div>
            <h2 style={montserrat.style} className="mb-4 text-4xl">
              {certificates[current].title.split("##").map((text, i) =>
                i % 2 === 0 ? (
                  text
                ) : (
                  <span key={i} className="text-[#ED1C24]">
                    {text}
                  </span>
                ),
              )}
            </h2>
            <p>{certificates[current].description}</p>

            <button className="mt-10 rounded-md bg-[#ED1C24] px-10 py-3 text-sm font-bold text-white">
              Learn More
            </button>
          </div>
        </div>
      )}

      <button
        className="text-3xl text-red-500 active:scale-95"
        onClick={() => setCurrent((current + 1) % certificates.length)}
      >
        <FaArrowCircleRight />
      </button>
      <div
        className="absolute bottom-10 left-0 h-[240px] w-[780px]"
        style={{
          background: "linear-gradient(96deg, #ED1C24 0.01%, #9E1C1C 78.5%)",
        }}
      ></div>
    </div>
  );
}
