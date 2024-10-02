import Image from "next/image";
import { MdFireTruck } from "react-icons/md";
import { TbFireHydrant } from "react-icons/tb";

export default function About() {
  return (
    <div className="relative z-20  bg-[#F9F6EE] p-10 px-2 xl:p-16 2xl:py-24 ">
      <div className="relative flex items-center justify-center">
        <h2 className="stroke absolute top-[70%] z-10 origin-left -translate-y-1/2 rotate-[270deg] transform p-2 font-alumni text-4xl font-bold uppercase xl: -left-6 xl:text-5xl 2xl:left-2 2xl:text-7xl">
          About
        </h2>

        <div className="relative flex h-full w-full max-w-[1200px] flex-col justify-between gap-6 xl:flex-row xl:gap-20">
          {/* Image Section */}
          <div className="flex items-center">
            <div className="flex items-center">
              <Image
                src="/About-small.png"
                width={200}
                height={500}
                alt="About"
                className="absolute -z-10"
              />
              <Image
                src="/About-large.png"
                width={300}
                height={500}
                alt="About"
                className="absolute left-36"
              />
            </div>
          </div>
          {/* text section */}
          <div className="relative left-32 w-[70%]">
            <h2 className="text-sm text-[#F12602] 2xl:text-lg">About Us</h2>
            <h3 className="w-[30rem] font-montserrat text-[40px] font-bold uppercase leading-[2rem] text-[#303030] 2xl:text-[50px] 2xl:leading-[3rem]">
              Building trust <br /> saving lives
            </h3>
            <p className="w-[30rem]  text-[#303030] text-justify">
              At Fire & Safety Management, we are committed to providing
              top-tier fire safety solutions that serve as your first line of
              defense in critical situations. Our comprehensive approach
              integrates advanced products, expert training, and strategic
              advice, all designed to enhance safety and preparedness.
            </p>

            <div className="mt-4 flex gap-4">
              <div className="flex gap-2">
                <MdFireTruck className="text-3xl text-primary 2xl:text-5xl" />
                <div>
                  <h3 className="font-montserrat text-xl font-bold">
                    Our Vision
                  </h3>
                  <p className="w-[18rem] text-sm text-justify">
                    Our vision is to be the best on corresponding with industry,
                    and infrastructure that expresses to ensure sustainable
                    safety.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <TbFireHydrant className="text-3xl text-primary 2xl:text-5xl" />
                <div>
                  <h3 className="font-montserrat text-xl font-bold">
                    Our Mission
                  </h3>
                  <p className="w-[18rem] text-sm text-justify">
                    Our mission is to support and provide required appliances or
                    services that are compliant standards to use in the field of
                    Fire and Safety.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-4 rounded-md bg-primary px-8 py-3 text-sm font-bold text-white 2xl:text-lg 2xl:py-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
