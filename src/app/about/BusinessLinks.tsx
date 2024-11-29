/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Slider from "react-infinite-logo-slider";

const businessLogos = [
  {
    id: 1,
    alt: "logo-1",
    src: "/business-logo/business-logo-1.png",
  },
  {
    id: 2,
    alt: "logo-2",
    src: "/business-logo/business-logo-2.png",
  },
  {
    id: 3,
    alt: "logo-3",
    src: "/business-logo/business-logo-3.png",
  },
  {
    id: 4,
    alt: "logo-4",
    src: "/business-logo/business-logo-4.png",
  },
  {
    id: 5,
    alt: "logo-5",
    src: "/business-logo/business-logo-5.png",
  },
  {
    id: 6,
    alt: "logo-6",
    src: "/business-logo/business-logo-6.png",
  },
  {
    id: 7,
    alt: "logo-7",
    src: "/business-logo/business-logo-7.png",
  },
  {
    id: 8,
    alt: "logo-8",
    src: "/business-logo/business-logo-8.png",
  },
];
export default function BusinessLinks() {
  return (
    <div className="#md:pl-[10%] #2xl:pl-[18%] #bg-[#F9F6EE] #px-20 my-20 bg-white py-16">
      <div className="mx-auto flex max-w-[1200px] items-center gap-10">
        <h2 className="w-[40%] font-montserrat text-4xl">
          Our{" "}
          <span className="font-bold text-primary text-red-500">
            Business Links
          </span>
        </h2>

        <div
          className="h-[110px] w-[2px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(237, 28, 36, 0) 0%, #ED1C24 50%, rgba(237, 28, 36, 0) 100%)",
          }}
        ></div>

        <div className="w-[60%]">
          <Slider
            width="200px"
            duration={40}
            pauseOnHover={true}
            blurBorders={true}
            blurBorderColor={"#fff"}
            // @ts-ignore
            className="w-full space-x-8"
          >
            {[...businessLogos, ...businessLogos].map((n, idx) => (
              <Slider.Slide key={idx}>
                <img
                  src={n.src}
                  alt={n.alt}
                  className="ticker-img mr-8 aspect-square h-[80px] w-[80px]"
                />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
