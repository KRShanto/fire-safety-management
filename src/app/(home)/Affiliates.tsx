import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

export default function Affiliates() {
  return (
    <div className="flex items-center justify-center gap-10 bg-white p-5">
      <h2 className="text-4xl" style={montserrat.style}>
        Our <span className="text-[#ED1C24]">Affiliations</span>
      </h2>

      <div
        className="h-[110px] w-[2px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(237, 28, 36, 0) 0%, #ED1C24 50%, rgba(237, 28, 36, 0) 100%)",
        }}
      ></div>

      <Image src="/Affiliate1.png" width={300} height={500} alt="Affiliates" />
      <Image src="/Affiliate2.png" width={300} height={500} alt="Affiliates" />
    </div>
  );
}
