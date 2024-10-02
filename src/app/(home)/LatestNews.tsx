import moment from "moment";
import { Alumni_Sans, Montserrat } from "next/font/google";
import { FaQuoteLeft, FaStar, FaStarHalf } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const news = [
  {
    title:
      "Building Safer Workplaces: A Look Inside FSM's Fire and Explosion Safety Workshop at BUET",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ullam est eros hendrerit in nisl vel consectetur interdum velit sagittis quam.",
    link: "#",
    date: "2021-10-10",
  },
  {
    title:
      "Building Safer Workplaces: A Look Inside FSM's Fire and Explosion Safety Workshop at BUET",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ullam est eros hendrerit in nisl vel consectetur interdum velit sagittis quam.",
    link: "#",
    date: "2021-10-10",
  },
];

export default function LatestNews() {
  return (
    <div className="relative flex items-center justify-center gap-20 bg-[#F9F6EE] p-20 pb-40">
      <h2 className="stroke absolute left-10 top-[60%] z-10 origin-left -translate-y-1/2 rotate-[270deg] transform font-alumni text-5xl font-bold uppercase 2xl:text-7xl 2xl:left-20">
        Latest news
      </h2>
      <div className="flex gap-6 max-w-[1200px]"> 
        <div className="w-full">
          <h2 className="w-[20rem] font-montserrat text-4xl font-bold uppercase text-primary">
            Latest in fire safety news
          </h2>
          <p className="mt-5  text-justify">
            Stay informed with the latest updates and breakthroughs in fire
            safety technology and regulations. Our news section keeps you ahead
            with the most current industry insights.
          </p>

          <button className="mt-5 rounded-lg bg-primary px-10 py-2 text-white">
            More News  
          </button>
        </div>

        <div className="flex gap-5 w-full">
          {news.map((news, i) => (
            <div
              key={i}
              className="flex h-[550px] w-[450px] flex-col gap-5 bg-white p-5"
              style={{
                boxShadow: "4px 4px 4px 2px rgba(0, 0, 0, 0.10)",
              }}
            >
              <div className="relative h-[250px] bg-[#DEDCDC]">
                <div className="absolute -bottom-5 right-5 flex flex-col items-center bg-primary px-2 py-1 text-white">
                  {/* format: 16 Jan */}
                  <p>{moment(news.date).format("DD")}</p>
                  <p>{moment(news.date).format("MMM")}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold">{news.title}</h3>
              <p>{news.desciption}</p>
              <a href={news.link} className="text-black font-bold flex items-center">
                READ MORE <IoIosArrowForward color='red'/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
