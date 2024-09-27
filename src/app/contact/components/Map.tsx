import React from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function MapComponent() {
  return (
    <>
      <section
        className="relative -mt-24 h-[530px] bg-cover bg-center"
        style={{ backgroundImage: "url(/heroone.png)" }}
      >
         <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center pl-48 font-montserrat">
          <h1 className="mb-4 text-5xl font-bold text-white">FSM Connect</h1>
          <p className="mb-8 text-xl text-white font-poppins">
            Reach out for Expert Safety Support and Services
          </p>
        </div>
      </section>
      {/* Map Section with Blurred Background */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/mapImg-blur.jpg)" }}
      >
        <div className="absolute inset-0 flex items-center justify-between px-20 py-12 font-montserrat">
          {/* Left: Contact Info */}
          <div className="max-w-[40%] text-black">
            <h2 className="font-montserrat text-lg font-bold text-primary">
              Emergency Call
            </h2>
            <h1 className="text-5xl font-bold uppercase text-black">
              Always Ready{" "}
              <div className="text-red-500">
                <span className="text-black">to</span> Help
              </div>
            </h1>
            <p className="max-w-lg text-black font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              erat nibh. Sed rutrum turpis quis lacinia sollicitudin. Sed ac
              neque cursus, ornare augue.
            </p>

            <div className="grid grid-cols-2 space-y-4 ">
              <div className="flex items-center">
                <FaPhoneAlt className="mr-4 h-8 w-8 text-red-500" />
                <div className="flex flex-col items-start">
                  <p className="font-bold">Phone Number</p>
                  <p>+880 17070-37998</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-4 h-8 w-8 text-red-500" />
                <div className="flex flex-col items-start">
                  <p className="font-bold">Email</p>
                  <p>info@fsmbd.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaGlobe className="mr-4 h-8 w-8 text-red-500" />
                <div className="flex flex-col items-start">
                  <p className="font-bold">Website</p>
                  <p>www.fsmbd.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="mr-4 h-10 w-10 text-red-500" />
                <div className="flex flex-col items-start">
                  <p className="font-bold">Location</p>
                  <p className="break-all">
                    House-4, Lane-16, Block-C, Sector-10, Mirpur, Dhaka-1216,
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative ml-auto min-w-[40%]">
            <div className="ml-auto h-14 w-44 bg-primary"></div>

            {/* Map Container */}
            <div className="relative ml-auto h-[500px] w-[600px] rounded-lg bg-white shadow-lg">
              <Image
                src="/mapImg.png"
                alt="Location Map"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <div className="ml-auto h-14 w-44 bg-primary"></div>
          </div>
        </div>
      </section>
    </>
  );
}