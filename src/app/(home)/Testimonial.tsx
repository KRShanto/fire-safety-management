import { cn } from "@/lib/cn";
import { Alumni_Sans, Montserrat } from "next/font/google";
import { FaQuoteLeft, FaStar, FaStarHalf } from "react-icons/fa";

const alumniSans = Alumni_Sans({ subsets: ["latin"], weight: "700" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

const testimonials = [
  {
    name: "Fahim Ahmed",
    star: 5,
    description:
      "I am very happy with the service provided by Fire and Safety Management. They are very professional and always deliver on time. I highly recommend them to anyone looking for safety and fire management solutions.",
  },
  {
    name: "KR Shanto",
    star: 4,
    description:
      "I am very happy with the service provided by Fire and Safety Management. They are very professional and always deliver on time. I highly recommend them to anyone looking for safety and fire management solutions.",
  },
  {
    name: "Aamir MZ",
    star: 2.5,
    description:
      "I am very happy with the service provided by Fire and Safety Management. They are very professional and always deliver on time. I highly recommend them to anyone looking for safety and fire management solutions.",
  },
];

export default function Testimonial() {
  return (
    <div className="relative flex flex-col items-center bg-[#F9F6EE] p-20 pb-40">
      <h2
        className="stroke absolute right-10 top-[60%] z-10 origin-right -translate-y-1/2 rotate-[90deg] transform text-7xl font-bold uppercase"
        style={alumniSans.style}
      >
        Testimonial
      </h2>

      <h2 className="text-4xl" style={montserrat.style}>
        FSM <span className="text-[#ED1C24]">Clients Thoughts</span>
      </h2>

      <p className="mt-5">
        Take a look at what our clients have to say about us and learn how we've
        helped them enhance their safety and security.
      </p>

      <div className="mt-5 flex w-[100rem] gap-10">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center gap-4 bg-white p-8 pb-20"
            style={{
              background:
                i % 2 === 0
                  ? "linear-gradient(96deg, #ED1C24 0.01%, #9E1C1C 78.5%)"
                  : "white",
              boxShadow: "4px 4px 4px 2px rgba(0, 0, 0, 0.10)",
            }}
          >
            <FaQuoteLeft
              size={50}
              className={cn(i % 2 === 0 ? "text-white" : "text-[#ED1C24]")}
            />
            <p
              className={cn(
                "text-center",
                i % 2 === 0 ? "text-white" : "text-black",
              )}
            >
              {testimonial.description}
            </p>
            <div className="flex gap-3">
              {[...Array(5)].map((_, i) =>
                i + 1 <= testimonial.star ? (
                  <FaStar key={i} className="text-xl text-yellow-500" />
                ) : i + 0.5 === testimonial.star ? (
                  <div className="relative">
                    <FaStarHalf key={i} className="text-xl text-yellow-500" />
                    <FaStar
                      key={i}
                      className="absolute left-0 top-0 text-xl text-yellow-500 opacity-35"
                    />
                  </div>
                ) : (
                  <FaStar
                    key={i}
                    className="text-xl text-yellow-500 opacity-35"
                  />
                ),
              )}
            </div>

            <div className="absolute -bottom-16 flex flex-col items-center">
              <div className="h-20 w-20 rounded-full bg-[#615556]"></div>
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
