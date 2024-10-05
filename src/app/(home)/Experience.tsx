import { cn } from "@/lib/cn";
import { Poppins } from "next/font/google";

const experience = [
  {
    number: 24,
    title: "Clients",
  },
  {
    number: 8,
    title: "International Partners",
  },
  {
    number: 4,
    title: "Local Partners",
  },
  {
    number: 25,
    title: "Years of Experience",
  },
];

export default function Experience() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 2,
      }}
      className="trapezoid-inverse mx-auto flex w-[70rem]
       items-center justify-evenly bg-[#F9F6EE] "
    >
      {experience.map((item, i) => (
        <div
          key={item.title}
          className={cn(
            "flex flex-col items-center",
            i % 2 === 0 ? "text-primary" : "text-[#2D59A9]",
          )}
        >
          <h3 className="font-montserrat text-[48px] font-bold">
            {item.number}
          </h3>
          <p className="-mt-4 text-lg">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
