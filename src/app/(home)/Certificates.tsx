/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const certificates = [
  {
    src: "/Certificate1.png",
    title: "We are ##RJSC CERTIFIED##",
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
  const swiper = useSwiper();

  return (
    <div className="relative flex h-screen items-center justify-center bg-[#F9F6EE] pt-40">
      <h2 className="stroke absolute right-10 top-[60%] z-10 origin-right -translate-y-1/2 rotate-[90deg] transform font-alumni text-5xl font-bold uppercase 2xl:right-20 2xl:text-7xl">
        Certificate
      </h2>

      <div className="my-auto h-full w-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {certificates.map((certificate, index) => (
            <SwiperSlide key={index}>
              <div className="n z-20 mx-auto flex max-w-[1200px] items-start justify-between">
                <div className="w-[45%]">
                  <img
                    src={certificate.src}
                    alt="Certificates"
                    className="h-auto w-full"
                    // width={500}
                    // height={500}
                  />
                </div>

                <div className="flex w-[50%] flex-col items-start">
                  <h2 className="mb-4 font-montserrat text-4xl font-bold">
                    {certificate.title.split("##").map((text, i) =>
                      i % 2 === 0 ? (
                        text
                      ) : (
                        <span key={i} className="text-primary">
                          {text}
                        </span>
                      ),
                    )}
                  </h2>
                  <p className="text-justify">{certificate.description}</p>

                  <div className="flex items-center gap-x-8">
                    <button className="mt-10 rounded-md bg-primary px-10 py-3 text-sm font-bold text-white">
                      Learn More
                    </button>
                    {/* <button
                    onClick={() => swiper.slideNext()}
                    style={{
                      marginTop: "20px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Next Slide
                  </button> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <button
        className="relative left-2 text-3xl text-red-500 active:scale-95 2xl:left-6"
        onClick={() => setCurrent((current + 1) % certificates.length)}
      >
        <FaArrowCircleRight />
      </button> */}
      <div
        className="absolute bottom-[50%] left-0 h-[150px] w-[47%]"
        style={{
          background: "linear-gradient(96deg, #ED1C24 0.01%, #9E1C1C 78.5%)",
        }}
      ></div>
    </div>
  );
}
