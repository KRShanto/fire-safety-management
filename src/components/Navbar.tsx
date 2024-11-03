import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 h-[100px] w-full">
      <div className="relative mx-auto h-full max-w-[72rem]">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="50,100 950,100 1000,0 0,0"
            className="fill-[#F9F6EE]"
          />
          {/* Left border */}
          <line
            x1="50"
            y1="100"
            x2="0"
            y2="0"
            className="stroke-[var(--primary)] stroke-[2]"
          />
          {/* Right border */}
          <line
            x1="950"
            y1="100"
            x2="1000"
            y2="0"
            className="stroke-[var(--primary)] stroke-[2]"
          />
          {/* Bottom border */}
          <line
            x1="50"
            y1="100"
            x2="950"
            y2="100"
            className="stroke-[var(--primary)] stroke-[4]"
          />
        </svg>
        <div className="relative z-10 flex h-full items-center justify-center gap-8 uppercase">
          <Link href="/about">About us</Link>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="logo"
              width={300}
              height={100}
              className="max-h-[100px]"
            />
          </Link>
          <div className="group relative">
            <button className="flex items-center space-x-1">
              <span>Library</span>
              <MdArrowDropDown size={20} />
            </button>
            <div className="absolute z-50 hidden rounded-sm bg-[#F9F6EE] shadow-lg group-hover:block">
              <Link className="dropdown-item" href="/gallery">
                Gallery
              </Link>
              <Link className="dropdown-item" href="/achievements">
                Achievements
              </Link>
            </div>
          </div>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
