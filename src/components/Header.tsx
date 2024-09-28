import React from "react";

const Header = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => {
  return (
    <div className="headerBG -mt-[95px] flex h-[30rem] w-full items-center px-8 md:px-20 xl:px-40 font-montserrat">
      <div className="headerBGOverlay"></div>
      <div className="relative z-20">
        <h1 className="text-6xl font-extrabold text-white">{heading}</h1>
        <hr className="my-4" />
        <p className="text-xl text-white">{subheading}</p>
      </div>
    </div>
  );
};

export default Header;
