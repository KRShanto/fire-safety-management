"use client";
import { Alumni_Sans, Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

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
      <h2 className="stroke font-alumni absolute right-10 top-[60%] z-10 origin-right -translate-y-1/2 rotate-[90deg] transform text-7xl font-bold uppercase">
        Certificate
      </h2>

      {certificates[current] && (
        <div className="z-20 flex w-[90rem] items-center gap-44">
          <Image
            src={certificates[current].src}
            alt="Certificates"
            width={500}
            height={500}
          />

          <div>
            <h2 className="font-montserrat mb-4 text-4xl font-bold">
              {certificates[current].title.split("##").map((text, i) =>
                i % 2 === 0 ? (
                  text
                ) : (
                  <span key={i} className="text-primary">
                    {text}
                  </span>
                ),
              )}
            </h2>
            <p>{certificates[current].description}</p>

            <button className="bg-primary mt-10 rounded-md px-10 py-3 text-sm font-bold text-white">
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
        className="absolute bottom-20 left-0 h-[240px] w-[780px]"
        style={{
          background: "linear-gradient(96deg, #ED1C24 0.01%, #9E1C1C 78.5%)",
        }}
      ></div>
    </div>
  );
}
