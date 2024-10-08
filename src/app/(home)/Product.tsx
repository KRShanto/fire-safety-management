import React from "react";
import Image from "next/image";
import { Alumni_Sans, Montserrat } from "next/font/google";

const rightSideImages = [
  {
    src: "/Home-product-2.png",
    title: "Emergency Response & Rescue",
  },
  {
    src: "/Home-product-3.png",
    title: "Water & Foam Based Fire Suppression",
  },
  {
    src: "/Home-product-4.png",
    title: "Emergency Response Kits",
  },
  {
    src: "/Home-product-5.png",
    title: "Front Line Fire Fighting Tools",
  },
  {
    src: "/Home-product-6.png",
    title: "Hazmat Response Kits",
  },
  {
    src: "/Home-product-7.png",
    title: "Personal Protective Equipment (PPE)",
  },
];

export default function Product() {
  return (
    <div className="relative flex flex-col items-center bg-[#F9F6EE] p-20 pb-40">
      <h2 className="stroke absolute right-10 top-[60%] z-10 origin-right -translate-y-1/2 rotate-[90deg] transform font-alumni text-5xl font-bold uppercase 2xl:right-20 2xl:text-7xl">
        Product
      </h2>

      <h2 className="mb-4 font-montserrat text-4xl font-bold">
        <span className="uppercase text-primary">Secured</span> the best for
        you!
      </h2>

      <p className="mb-8 w-[60rem] text-center">
        We've handpicked the industry's top fire & safety gear through trusted
        manufacturers, ensuring you receive only the best solutions for
        protection and performance.
      </p>

      <div className="flex h-[50rem] max-w-[1200px] gap-5">
        <div className="relative w-[50%]">
          <Image
            src="/Home-product-1-up.png"
            alt="Fire & Safety Gear"
            width={900}
            height={800}
          />
          <Image
            src="/Home-product-1-down.png"
            alt="Fire & Safety Gear"
            width={900}
            height={800}
            className="relative -top-[15.35rem] "
          />

          <h3 className="absolute bottom-16 left-2 text-5xl font-bold text-white">
            Smoke & Gas Detection Appliances
          </h3>
        </div>

        <div className="grid w-[50%] grid-cols-2 gap-2 h-[100px]">
          {rightSideImages.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.src}
                alt={image.title}
                width={400}
                height={400}
              />
              <h3 className="absolute bottom-4 left-2 text-2xl 2xl:text-3xl 2xl:bottom-5   text-white">
                {image.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
