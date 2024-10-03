import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="trapezoid-wrapper sticky ">
      <div className="trapezoid relative top-0 z-50 mx-auto flex w-[70rem] items-center justify-center gap-8 bg-[#F9F6EE] uppercase shadow-2xl border-b-2 nav-border-color">
        <Link href="/about">About us</Link>
        <Link href="/products">Products</Link>
        <Link href="/services">Services</Link>
        <Image src="/Logo.png" alt="logo" width={300} height={300} />
        <Link href="/library">Library</Link>
        <Link href="/career">Career</Link>
        <Link href="/contact">Contact us</Link>
      </div>
    </nav>
  );
}
