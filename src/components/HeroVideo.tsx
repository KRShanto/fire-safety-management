"use client";

import { usePathname } from "next/navigation";

export default function HeroVideo() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <>
      <video
        src="/Background.mp4"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      ></video>
      <div
        style={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>
    </>
  );
}
