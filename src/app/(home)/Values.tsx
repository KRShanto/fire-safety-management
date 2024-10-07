"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Values() {
  const viewDevRef = useRef<HTMLDivElement>(null);
  const startingArrowTopLeft = useRef<HTMLDivElement>(null);
  const startingArrowTopRight = useRef<HTMLDivElement>(null);
  const startingArrowBottomLeft = useRef<HTMLDivElement>(null);
  const startingArrowBottomRight = useRef<HTMLDivElement>(null);

  const lineArrowTopLeft = useRef<HTMLDivElement>(null);
  const lineArrowTopRight = useRef<HTMLDivElement>(null);
  const lineArrowBottomLeft = useRef<HTMLDivElement>(null);
  const lineArrowBottomRight = useRef<HTMLDivElement>(null);

  const lineArrowMiddleLeft = useRef<HTMLDivElement>(null);
  const lineArrowMiddleRight = useRef<HTMLDivElement>(null);

  const topLeftText = useRef<HTMLDivElement>(null);
  const topRightText = useRef<HTMLDivElement>(null);
  const bottomLeftText = useRef<HTMLDivElement>(null);
  const bottomRightText = useRef<HTMLDivElement>(null);
  const middleLeftText = useRef<HTMLDivElement>(null);
  const middleRightText = useRef<HTMLDivElement>(null);

  const isInView = useInView(viewDevRef, {
    amount: 0.6,
  });

  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.8]);

  useEffect(() => {
    if (isInView) {
      onHover();
    } else {
      onHoverOut();
    }
  }, [isInView]);

  const onHover = () => {
    const startingArrows = [
      startingArrowTopLeft.current,
      startingArrowTopRight.current,
      startingArrowBottomLeft.current,
      startingArrowBottomRight.current,
    ];
    const lineArrows = [
      lineArrowTopLeft.current,
      lineArrowTopRight.current,
      lineArrowBottomLeft.current,
      lineArrowBottomRight.current,
      lineArrowMiddleLeft.current,
      lineArrowMiddleRight.current,
    ];
    const texts = [
      topLeftText.current,
      topRightText.current,
      bottomLeftText.current,
      bottomRightText.current,
      middleLeftText.current,
      middleRightText.current,
    ];

    startingArrows.forEach((arrow) => {
      arrow!.style.opacity = "1";
    });

    setTimeout(() => {
      lineArrows.forEach((arrow) => {
        arrow!.style.opacity = "1";
      });
    }, 100);

    setTimeout(() => {
      texts.forEach((text) => {
        text!.style.opacity = "1";
      });
    }, 200);
  };

  const onHoverOut = () => {
    const startingArrows = [
      startingArrowTopLeft.current,
      startingArrowTopRight.current,
      startingArrowBottomLeft.current,
      startingArrowBottomRight.current,
    ];
    const lineArrows = [
      lineArrowTopLeft.current,
      lineArrowTopRight.current,
      lineArrowBottomLeft.current,
      lineArrowBottomRight.current,
      lineArrowMiddleLeft.current,
      lineArrowMiddleRight.current,
    ];
    const texts = [
      topLeftText.current,
      topRightText.current,
      bottomLeftText.current,
      bottomRightText.current,
      middleLeftText.current,
      middleRightText.current,
    ];

    texts.forEach((text) => {
      text!.style.opacity = "0";
    });

    setTimeout(() => {
      lineArrows.forEach((arrow) => {
        arrow!.style.opacity = "0";
      });
    }, 100);

    setTimeout(() => {
      startingArrows.forEach((arrow) => {
        arrow!.style.opacity = "0";
      });
    }, 200);
  };

  return (
    <motion.div className="relative flex h-[60rem] w-full flex-col items-center bg-[#F9F6EE]">
      <Image
        src="/Values-bg.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />

      <h2 className="relative top-8 z-20 font-montserrat text-4xl font-bold">
        <span className="uppercase text-primary">Why</span> choose us?
      </h2>

      <motion.div
        style={{ scale }}
        className="absolute top-[50%] z-20 w-[50rem] -translate-y-1/2 transform"
      >
        {/* invisible div for hover */}
        <div
          ref={viewDevRef}
          className="absolute left-1/2 top-1/2 z-50 h-[45rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          // onMouseEnter={onHover}
          // onMouseLeave={onHoverOut}
        ></div>

        <Image
          src="/Fire-figher.png"
          width={500}
          height={500}
          alt="Fire fighter"
          className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src="/Circle.png"
          width={600}
          height={500}
          alt="Circle"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <motion.h2 className="text-white-shadow absolute left-[50%] top-[50%] z-40 -translate-x-1/2 -translate-y-1/2 font-alumni text-[200px] font-bold uppercase text-white 2xl:text-[220px]">
          V<span className="stroke-white">Alue</span>s
        </motion.h2>
        {/* Starting Arrow top-left */}
        <div
          className="absolute left-[95px] top-[-225px] h-2 w-24 rotate-[30deg] transform rounded-lg bg-white opacity-0 transition-opacity duration-300 ease-in-out"
          ref={startingArrowTopLeft}
        ></div>
        {/* Starting Arrow top-right */}
        <div
          className="absolute right-[95px] top-[-225px] h-2 w-24 -rotate-[30deg] transform rounded-lg bg-white opacity-0 transition-opacity duration-300 ease-in-out"
          ref={startingArrowTopRight}
        ></div>
        {/* Starting Arrow bottom-left */}
        <div
          className="absolute bottom-[-225px] left-[95px] h-2 w-24 -rotate-[30deg] transform rounded-lg bg-white opacity-0 transition-opacity duration-300 ease-in-out"
          ref={startingArrowBottomLeft}
        ></div>
        {/* Starting Arrow bottom-right */}
        <div
          className="absolute bottom-[-225px] right-[95px] h-2 w-24 rotate-[30deg] transform rounded-lg bg-white opacity-0 transition-opacity duration-300 ease-in-out"
          ref={startingArrowBottomRight}
        ></div>
        {/* Line Arrow top-left */}
        <div
          className="absolute left-[-85px] top-[-248px] h-2 w-48 transform rounded-lg bg-white opacity-0 transition-opacity duration-300 ease-in-out 2xl:left-[-181px] 2xl:w-72"
          ref={lineArrowTopLeft}
        ></div>
        {/* Line Arrow top-right */}
        <div
          className="absolute right-[-85px] top-[-248px] h-2 w-48 transform rounded-lg bg-white opacity-0 transition-opacity duration-300 ease-in-out 2xl:right-[-181px] 2xl:w-72"
          ref={lineArrowTopRight}
        ></div>
        {/* Line Arrow bottom-left */}
        <div
          className="absolute bottom-[-248px] left-[-85px] h-2 w-48 transform rounded-lg bg-white opacity-0 transition-opacity duration-300 ease-in-out 2xl:left-[-181px] 2xl:w-72"
          ref={lineArrowBottomLeft}
        ></div>
        {/* Line Arrow bottom-right */}
        <div
          className="absolute bottom-[-248px] right-[-85px] h-2 w-48 transform rounded-lg bg-white opacity-0 transition-opacity duration-300 ease-in-out 2xl:right-[-181px] 2xl:w-72"
          ref={lineArrowBottomRight}
        ></div>
        {/* Line Arrow middle-left */}
        <div
          className="absolute left-[-20px] top-[50%] h-2 w-32 transform rounded-lg bg-white opacity-0 transition-opacity duration-300 ease-in-out 2xl:left-[-173px] 2xl:w-72"
          ref={lineArrowMiddleLeft}
        ></div>
        {/* Line Arrow middle-right */}
        <div
          className="absolute right-[-20px] top-[50%] h-2 w-32 transform rounded-lg bg-white opacity-0 transition-opacity duration-300 ease-in-out 2xl:right-[-173px] 2xl:w-72"
          ref={lineArrowMiddleRight}
        ></div>

        {/* Top left text */}
        <h3
          className="absolute left-[-225px] top-[-258px] text-xl font-semibold text-white opacity-0 transition-opacity duration-300 ease-in-out 2xl:left-[-315px]"
          ref={topLeftText}
        >
          Acountability
        </h3>
        {/* Top right text */}
        <h3
          className="absolute right-[-225px] top-[-270px] text-xl font-semibold text-white opacity-0 transition-opacity duration-300 ease-in-out 2xl:right-[-315px]"
          ref={topRightText}
        >
          Customer <br /> Satisfaction
        </h3>
        {/* Bottom left text */}
        <h3
          className="absolute bottom-[-265px] left-[-225px] text-xl font-semibold text-white opacity-0 transition-opacity duration-300 ease-in-out 2xl:left-[-315px]"
          ref={bottomLeftText}
        >
          High-quality <br /> products
        </h3>
        {/* Bottom right text */}
        <h3
          className="absolute bottom-[-258px] right-[-280px] text-xl font-semibold text-white opacity-0 transition-opacity duration-300 ease-in-out 2xl:right-[-380px]"
          ref={bottomRightText}
        >
          Team & Leadership
        </h3>
        {/* Middle left text */}
        <h3
          className="absolute left-[-145px] top-[-10px] text-xl font-semibold text-white opacity-0 transition-opacity duration-300 ease-in-out 2xl:left-[-290px]"
          ref={middleLeftText}
        >
          Innovation
        </h3>
        {/* Middle right text */}
        <h3
          className="absolute right-[-275px] top-[-20px] text-xl font-semibold text-white opacity-0 transition-opacity duration-300 ease-in-out 2xl:right-[-440px]"
          ref={middleRightText}
        >
          Adopting the newest <br /> Technologies & Standards
        </h3>
      </motion.div>
    </motion.div>
  );
}
