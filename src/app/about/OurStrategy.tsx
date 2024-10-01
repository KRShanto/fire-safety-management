const ourStrategy = [
  {
    id: 1,
    title: "Prioritizing Your Safety",
    description:
      "At FSM, your safety is at the core of everything we do. We are committed to ensuring the well-being of our clients and their assets, providing top-tier fire safety solutions that you can trust in any situation.",
    imageLink: "/strategy-image/strategy-1.jfif",
  },
  {
    id: 2,
    title: "Innovative Safety Solutions",
    description:
      "We lead with innovation to enhance fire safety. Our approach involves deploying the latest technology and creative strategies to protect lives and property effectively.",
    imageLink: "/strategy-image/strategy-2.jfif",
  },
  {
    id: 3,
    title: "Empowering Our Team for Your Success",
    description:
      "Our strength lies in our team. We invest in continuous training and development to ensure our staff is equipped with the knowledge and tools to succeed.",
    imageLink: "/strategy-image/strategy-3.jfif",
  },
  {
    id: 4,
    title: "Building Brand Awareness Through Trust",
    description:
      "At FSM, your safety is at the core of everything we do. We are committed to ensuring the well-being of our clients and their assets, providing top-tier fire safety solutions that you can trust in any situation.",
    imageLink: "/strategy-image/strategy-4.jfif",
  },
];

export default function OurStrategy() {
  return (
    <div className="mx-auto max-w-7xl py-20">
      <h1 className="mr-5 text-center text-[40px] font-bold">
        Our <span className="font-poppins text-[#ED1C24]">STRATEGY</span>
      </h1>
      <div className="grid grid-cols-4 gap-x-3">
        {ourStrategy.map((strategy) => (
          <div
            key={strategy.id}
            className="mt-8 h-[514px] bg-gray-400 duration-300 hover:-translate-y-8 hover:duration-500"
            style={{
              background: `url(${strategy.imageLink})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
            }}
          >
            <div className="flex h-full w-full flex-col items-end justify-center bg-gradient-to-t from-red-600 to-transparent p-3 text-white">
              <h3 className="text-wrap text-center font-montserrat text-[30px] font-semibold leading-9">
                {strategy.title}
              </h3>
              <p className="mt-10 text-center font-poppins text-[18px] font-light leading-7">
                {strategy.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
