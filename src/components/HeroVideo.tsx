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
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -2,
        }}
      ></video>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "150%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      ></div>
    </>
  );
}
