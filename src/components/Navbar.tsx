import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="h-[100px] overflow-hidden w-full sticky top-0 z-50">
      <div className="max-w-[72rem] mx-auto relative h-full">
        <svg
          className="absolute top-0 left-0 w-full h-full "
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="50,100 950,100 1000,0 0,0"
            className="fill-[#F9F6EE] "
          />
           {/* Left border */}
           <line
            x1="50" y1="100"
            x2="0" y2="0"
            className="stroke-[var(--primary)] stroke-[2]"
          />
          {/* Right border */}
          <line
            x1="950" y1="100"
            x2="1000" y2="0"
            className="stroke-[var(--primary)] stroke-[2]"
          />
          {/* Bottom border */}
          <line
            x1="50" y1="100"
            x2="950" y2="100"
            className="stroke-[var(--primary)] stroke-[4]"
          />
        </svg>
        <div className="relative z-10 flex items-center justify-center gap-8 h-full uppercase">
          <Link href="/about">About us</Link>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Image src="/Logo.png" alt="logo" width={300} height={100} className="max-h-[100px]" />
          <Link href="/library">Library</Link>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
