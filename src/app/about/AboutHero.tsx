import HeroBanner from "@/../public/about-hero-banner.png";
export default function AboutHero() {
  return (
    <div
      className={`relative -mt-[92px] h-[528px]`}
      style={{
        background: `url('/about-hero-banner.png')`,
        backgroundClip: "border-box",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay" />
      <div className="absolute left-[50%] z-20 mx-auto flex h-full w-full max-w-7xl -translate-x-[50%] flex-col justify-center">
        <div className="mt-32 leading-[1]">
          <h1 className="font-montserrat text-[64px] font-bold text-white">
            ABOUT FSM
          </h1>
          <div className="h-[2px] w-[709px] bg-gradient-to-r from-stone-50 to-transparent"></div>
          <p className="mt-8 font-poppins text-[25px] font-semibold text-white">
            Ensuring safety isn’t just our business - it’s our MISSION.
          </p>
        </div>
      </div>
    </div>
  );
}
