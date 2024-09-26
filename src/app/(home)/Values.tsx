import { Alumni_Sans, Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

export default function Values() {
  return (
    <div className="relative flex h-[60rem] w-full flex-col items-center bg-[#F9F6EE]">
      <Image
        src="/Values-bg.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />

      <h2 className="font-montserrat z-20 text-4xl font-bold">
        <span className="text-primary uppercase">Why</span> choose us?
      </h2>

      <div className="absolute top-[50%] z-20 -translate-y-1/2 transform">
        <Image
          src="/Fire-figher.png"
          width={500}
          height={500}
          alt="Fire fighter"
        />

        <h2 className="text-white-shadow font-alumni absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-[220px] font-bold uppercase text-white">
          V<span className="stroke-white">Alue</span>s
        </h2>
      </div>
    </div>
  );
}
