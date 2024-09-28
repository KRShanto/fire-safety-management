import Image from "next/image";

export default function OurCoreActivity() {
  return (
    <div
      className="relative h-[790px]"
      style={{
        background: "url(/activity-bg-image.png)",
        backgroundRepeat: "repeat-x",
      }}
    >
      <div className="overlay bg-[#ED1C24] opacity-95" />
      <div className="trapezoid absolute left-[50%] top-0 z-50 mx-auto flex h-[104px] w-[70rem] -translate-x-[50%] items-center justify-center gap-8 bg-[#F9F6EE]">
        <h1 className="mr-5 text-center text-[40px] font-bold">
          Our <span className="font-poppins text-[#ED1C24]">CORE ACTIVITY</span>
        </h1>
      </div>
      {/* activity card section */}
      <div></div>
      <div className="trapezoid-inverse absolute bottom-0 left-[50%] z-50 mx-auto flex h-[104px] w-[70rem] -translate-x-[50%] items-center justify-center gap-8 bg-[#F9F6EE] uppercase" />
    </div>
  );
}
