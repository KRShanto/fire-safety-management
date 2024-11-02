"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBoxSeam } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { MdEmail, MdOutlinePhoto } from "react-icons/md";

const insights = [
  { src: "/Insight1.png", title: "Product", icon: <BsBoxSeam /> },
  { src: "/Insight2.png", title: "News", icon: <LuNewspaper /> },
  { src: "/Insight3.png", title: "Services", icon: <IoSettings /> },
  { src: "/Insight4.png", title: "Gallery", icon: <MdOutlinePhoto /> },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="relative flex flex-col items-center bg-[#F9F6EE] pt-40">
      {/* Careers */}
      <div
        className="p-20 px-40"
        style={{
          width: "100%",
          height: "400px",
          background: "url('/Career-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="font-montserrat text-4xl font-bold text-white">
          Careers at FSM
        </h2>

        <p className="mt-5 w-[50rem] text-lg text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          pariatur magnam veritatis inventore, itaque deleniti vitae qui
          doloribus earum fuga, odio nemo sequi error minus alias nesciunt at
          labore iste. Optio voluptatem provident
        </p>

        <button className="mt-5 rounded-lg bg-primary px-10 py-3 font-semibold text-white">
          Start Your Career Here
        </button>

        <button className="ml-5 mt-5 rounded-lg border-2 border-white px-10 py-2 text-white">
          Call +880 17070-37996
        </button>
      </div>

      {/* Insights */}
      {pathname !== "/" ? (
        <div className="flex flex-col items-center p-20 font-montserrat font-bold">
          <h2 className="text-4xl uppercase">
            <span className="text-primary">F</span>
            <span className="text-[#2D59A9]">S</span>
            <span className="text-[#202A5E]">M</span> <span>Insights</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {insights.map((insight, i) => (
              <div
                key={i}
                className="flex cursor-pointer flex-col items-center justify-center gap-5 text-white transition-all duration-300 hover:text-primary"
                style={{
                  width: "600px",
                  height: "250px",
                  background: `url('${insight.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="text-8xl">{insight.icon}</div>
                <h3 className="text-4xl">{insight.title}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Add some padding if the page is home
        <div className="p-20"></div>
      )}
      <div className="relative mb-0 flex justify-center gap-5 bottom-120 z-10 top-20">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-20 w-20 rounded-full bg-primary p-3 ">
              <Image
                alt="Footer icon"
                src={`/Footer-icon-${i + 1}.svg`}
                width={55}
                height={55}
              />
            </div>
          ))}
        </div>

      {/* Actual footer */}
      <footer
        className="relative footer-trapezoid text-white"
        style={{ backgroundImage: 'url("/blueFooterbg.png")' }}
      >
        <div className="z-1 absolute inset-0 bg-blue-800 opacity-50" />
        

        <div className="m-8 mt-24 flex justify-between gap-6 text-sm lg:gap-4 xl:gap-8 2xl:gap-6">
          <div className="z-10 flex flex-col gap-1 text-white">
            <Image
              alt="Footer logo"
              src="/Footer-FSM.png"
              width={500}
              height={200}
            />
            <p className="ml-24 w-[20rem] 2xl:ml-28 2xl:pl-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              alias id eligendi fugiat ad dolorum dignissimos neque, molestiae
              quas eos.
            </p>
          </div>
          <div className="z-10 mt-7 flex flex-col gap-4 text-lg text-white lg:gap-5">
            <h3 className="text-2xl font-bold uppercase">Navigate</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/library">Library</Link>
            <Link href="/career">Career</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="z-10 mt-7 flex flex-col gap-4 text-lg text-white lg:gap-5">
            <h3 className="text-2xl font-bold uppercase">Services</h3>
            <Link href="/services">Emergency Evacuation Process Training</Link>
            <Link href="/services">Basic Fire Training</Link>
            <Link href="/services">Basic Safety Training</Link>
          </div>
          <div className="z-10 mt-7 flex flex-col gap-4 text-lg lg:gap-5">
            <h3 className="text-2xl font-bold uppercase">Library</h3>
            <Link href="/library">Gallery</Link>
            <Link href="/library">Achievements</Link>
          </div>
          <div className="z-10 mr-16 mt-7 flex flex-col gap-4 text-lg lg:gap-5">
            <h3 className="text-2xl font-bold uppercase">Get in touch</h3>
            <p>
              <FaPhone className="mr-2 inline-block" />
              +880 17070-37996
            </p>
            <p>
              <MdEmail className="mr-2 inline-block" />
              info@fsmbd.com <br /> fsm.info@gmail.com
            </p>
            <div className="flex gap-5">
              <FaFacebook className="text-4xl" />
              <FaInstagram className="text-4xl" />
              <FaLinkedin className="text-4xl" />
              <FaYoutube className="text-4xl" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col p-5 px-40 text-xl text-white lg:flex-row lg:justify-between">
          <p className="z-10 ">© All Rights Reserved By FSM 2024</p>
          <p className="z-10">
            Developed By <b>Levant IT Solution</b>
          </p>
        </div>
      </footer>
    </div>
  );
}
