import Image from "next/image";

const businessLogos = [
  {
    id: 1,
    alt: "logo-1",
    src: "/business-logo/business-logo-1.png",
  },
  {
    id: 2,
    alt: "logo-2",
    src: "/business-logo/business-logo-2.png",
  },
  {
    id: 3,
    alt: "logo-3",
    src: "/business-logo/business-logo-3.png",
  },
  {
    id: 4,
    alt: "logo-4",
    src: "/business-logo/business-logo-4.png",
  },
  {
    id: 5,
    alt: "logo-5",
    src: "/business-logo/business-logo-5.png",
  },
  {
    id: 6,
    alt: "logo-6",
    src: "/business-logo/business-logo-6.png",
  },
  {
    id: 7,
    alt: "logo-7",
    src: "/business-logo/business-logo-7.png",
  },
  {
    id: 8,
    alt: "logo-8",
    src: "/business-logo/business-logo-8.png",
  },
];
export default function BusinessLinks() {
  return (
    <div className="mt-20 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center space-x-3 py-4">
        <h1 className="mr-5 text-[40px] font-bold">
          Our <span className="text-[#ED1C24]">Business Links</span>
        </h1>
        <div
          className="h-[159px] w-[1px]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0),  red, rgba(0,0,0,0))",
          }}
        />
        <div className="flex items-center space-x-4">
          {businessLogos.map((logoInfo) => (
            <Image
              className="h-[60px] w-[60px]"
              key={logoInfo.id}
              src={logoInfo.src}
              alt={logoInfo.alt}
              width={500}
              height={500}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
