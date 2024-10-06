import { BsClipboard2XFill } from "react-icons/bs";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { IoSettingsSharp } from "react-icons/io5";
import { MdModelTraining } from "react-icons/md";

const activities = [
  {
    id: 1,
    title: "sale",
    bgImageSrc: "/activity/activity-1.jfif",
    icon: HiMiniShoppingCart,
  },
  {
    id: 2,
    title: "service",
    bgImageSrc: "/activity/activity-2.jfif",
    icon: IoSettingsSharp,
  },
  {
    id: 3,
    title: "training",
    bgImageSrc: "/activity/activity-3.jfif",
    icon: MdModelTraining,
  },
  {
    id: 4,
    title: "consultancy",
    bgImageSrc: "/activity/activity-4.jfif",
    icon: BsClipboard2XFill,
  },
];

export default function OurCoreActivity() {
  return (
    <div
      className="relative h-[790px]"
      style={{
        background: "url(/activity-bg-image.png)",
        
      }}
    >
      <div className="overlay bg-[#ED1C24] opacity-95" />
      <div className="trapezoid absolute left-[41%] 2xl:left-[29%] top-0 z-30 mx-auto flex h-[104px] w-[70rem] -translate-x-[50%] items-center justify-center gap-8 bg-[#F9F6EE]">
        <h1 className="mr-5 text-center text-[40px] font-bold">
          Our <span className="font-poppins text-[#ED1C24]">CORE ACTIVITY</span>
        </h1>
      </div>
      {/* activity card section */}
      <div className="absolute left-[49%] z-30 mx-auto flex h-full w-full max-w-[1200px] -translate-x-[50%] -translate-y-[15%] items-center justify-center">
        <div className="grid w-full grid-cols-4 gap-x-3">
          {activities.map((activity) => {
            return (
              <div
                key={activity.id}
                className="group relative h-[345px] w-[290px] cursor-pointer bg-cover bg-center duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-white/70 before:duration-500 hover:-translate-y-5 hover:duration-500 before:hover:bg-red-500/70"
                style={{
                  backgroundImage: `url(${activity.bgImageSrc})`,
                }}
              >
                <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center space-y-5">
                  {
                    <activity.icon
                      size={75}
                      className="text-red-600 group-hover:text-white"
                    />
                  }
                  <h3 className="font-montserrat text-4xl font-bold uppercase text-red-600 group-hover:text-white">
                    {activity.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="trapezoid-inverse absolute bottom-0 left-[50%] z-30 mx-auto flex h-[104px] w-[70rem] -translate-x-[50%] items-center justify-center gap-8 bg-[#F9F6EE] uppercase" />
    </div>
  );
}
