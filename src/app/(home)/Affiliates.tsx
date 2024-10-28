/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";
import Slider from "react-infinite-logo-slider";

export default function Affiliates() {
  return (
    <div className="flex items-center gap-10 bg-[#F9F6EE] py-20 md:pl-[10%] 2xl:pl-[18%]">
      <h2 className="w-[20%] font-montserrat text-4xl">
        Our <span className="text-primary">Affiliations</span>
      </h2>

      <div
        className="h-[110px] w-[2px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(237, 28, 36, 0) 0%, #ED1C24 50%, rgba(237, 28, 36, 0) 100%)",
        }}
      ></div>

      <div className="w-[75%]">
        <Slider
          width="500px"
          duration={40}
          pauseOnHover={true}
          blurBorders={true}
          blurBorderColor={"#fff"}
          // @ts-ignore
          className="w-full"
        >
          {[1, 2, 1, 2].map((n, idx) => (
            <Slider.Slide key={idx}>
              <img
                src={`/Affiliate${n}.png`}
                alt="Affiliates"
                className="ticker-img"
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </div>
  );
}
