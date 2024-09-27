import Image from "next/image";
import React from "react";

export default function Experience() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-center space-x-32 pt-52">
      <div
        className="relative h-[652px] w-[559px] shrink-0"
        style={{
          backgroundImage: `url(/about-person-1.jfif)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="-ml-[60px] -mt-[80px] flex h-[152px] w-[210px] items-center justify-center bg-[#ed1c24] p-4">
          <h3 className="text-center font-poppins text-3xl font-semibold text-white">
            20 YEARS EXPERIENCE
          </h3>
        </div>
        <Image
          className="absolute -right-[50px] bottom-0 h-[225px] w-[300px] ring-8 ring-white"
          src="/about-person-2.jfif"
          alt="Experience banner"
          width={500}
          height={500}
        />
      </div>
      <div>
        <h1 className="text-[40px] font-bold">
          <span className="font-montserrat text-[#ed1c24]">WHO</span> we are?
        </h1>
        <p className="p-2 font-poppins">
          Fire & Safety Management Was Established To Offer A Comprehensive
          Range Of Services Including Sales, Service, Training, And Consultancy
          In Safety, Fire, Rescue, Emergency Response, And Evacuation. Aimed At
          Fostering Sustainable Safety Excellence And Ensuring Preparedness
          Across Residential, Occupational, And Industrial Settings, The Company
          Draws On The Expertise Of Professionals With Over 20 Years Of
          Industrial Experience. It Adheres To International Standards Such As
          OSHA, NFPA, FEMA, NIOSH, ANSI, ASHI, ASC, ICC, And EN.
        </p>
        <button className="btn-primary mt-5">Company Portfolio</button>
      </div>
    </div>
  );
}
