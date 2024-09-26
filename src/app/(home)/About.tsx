import Image from "next/image";
import { MdFireTruck } from "react-icons/md";
import { TbFireHydrant } from "react-icons/tb";

export default function About() {
  return (
    <div className="relative z-20 flex items-center justify-center gap-20 bg-[#F9F6EE] p-20">
      {/* make it left-center */}
      <h2 className="stroke font-alumni absolute left-10 top-[60%] z-10 origin-left -translate-y-1/2 rotate-[270deg] transform text-7xl font-bold uppercase">
        About
      </h2>

      <div className="flex items-center">
        <Image
          src="/About-small.png"
          width={300}
          height={500}
          alt="About"
          className="relative left-24 -z-10"
        />
        <Image src="/About-large.png" width={400} height={500} alt="About" />
      </div>

      <div>
        <h2 className="text-lg text-[#F12602]">About Us</h2>
        <h3 className="font-montserrat w-[50rem] text-[60px] font-bold uppercase leading-[4rem] text-[#303030]">
          Building trust <br /> saving lives
        </h3>
        <p className="w-[40rem] text-lg text-[#303030]">
          At Fire & Safety Management, we are committed to providing top-tier
          fire safety solutions that serve as your first line of defense in
          critical situations. Our comprehensive approach integrates advanced
          products, expert training, and strategic advice, all designed to
          enhance safety and preparedness.
        </p>

        <div className="flex">
          <div className="mt-5 flex flex-row gap-2">
            <MdFireTruck className="text-primary text-3xl" />
            <div>
              <h3 className="font-montserrat text-2xl font-bold">Our Vision</h3>
              <p className="w-[20rem] text-lg">
                Our vision is to be the best on corresponding with industry, and
                infrastructure that expresses to ensure sustainable safety.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-row gap-2">
            <TbFireHydrant className="text-primary text-3xl" />
            <div>
              <h3 className="font-montserrat text-2xl font-bold">
                Our Mission
              </h3>
              <p className="w-[20rem] text-lg">
                Our mission is to support and provide required appliances or
                services that are compliant standards to use in the field of
                Fire and Safety.
              </p>
            </div>
          </div>
        </div>

        <button className="bg-primary rounded-md px-10 py-3 text-lg font-bold text-white">
          Learn More
        </button>
      </div>
    </div>
  );
}
