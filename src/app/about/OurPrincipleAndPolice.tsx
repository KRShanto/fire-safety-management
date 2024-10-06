import { cn } from "@/lib/cn";
import Image from "next/image";

const principleAndPolicy = [
  {
    id: 1,
    title: "mission",
    description:
      "<p style='text-align: center;'>Our mission is to support and provide required appliances or services that are compliant standards to use in the field of Fire and Safety.</p>",
    imageSrc: "/principle-policy-icon/mission.svg",
  },
  {
    id: 2,
    title: "vission",
    description:
      "<p style='text-align: center;'>Our vision is to be the best on corresponding with industry, and infrastructure that expresses to ensure sustainable safety.</p>",
    imageSrc: "/principle-policy-icon/vision.svg",
  },
  {
    id: 3,
    title: "skills",
    description:
      "The organizer of FSM is competent in Safety, Fire, and Emergency Management Systems and channeled with global business partners. The supporting members of FSM are trained by organizers and external sources for business matters related to the safety and fire field.",
    imageSrc: "/principle-policy-icon/skill.svg",
  },
  {
    id: 4,
    title: "commitment",
    description: `The FSM outlines a viable commitment to carry out ethical and reasonable trades within its timeframe which is followed by:
    <ul>
      <li>- Response to end- users call @24 / 7 *for critical matters only.</li>
      <li>- Initiate corrective action for nonconformity if carried out by FSM.</li>
    </ul> <strong>Category that falls under after-sales or service terms*</strong>`,
    imageSrc: "/principle-policy-icon/commitment.svg",
  },
  {
    id: 5,
    title: "Aim & Objectives",
    description: `Our aim is trust, integrity, and commitment, and our objective is to
pursue and establish strategic partnerships with clients for appropriate
Fire and Safety provisions to ensure a safe working environment.`,
    imageSrc: "/principle-policy-icon/objective.svg",
  },
  {
    id: 6,
    title: "Policy",
    description: `<p>Our policy relates to national regulatory norms including guidance that
is recognized by BFSCD Bangladesh Fire Service and Civil Defence to
 carry out business for Fire and Safety appliances and services.</p>`,
    imageSrc: "/principle-policy-icon/policy.svg",
  },
  {
    id: 7,
    title: "Privileges",
    description: `Clarify subjects within business term and scope as follows:
    <ul>
      <li>- Obtain quotation without ransom. (Scope related items only)</li>
      <li>- Request free minor desktop consultancy. (Terms apply)</li>
      <li>- Request charge free basic safety training. (Terms apply)</li>
    </ul>`,
    imageSrc: "/principle-policy-icon/privileges.svg",
  },
];
export default function OurPrincipleAndPolicy() {
  return (
    <div className="mx-auto mt-20 max-w-7xl">
      {/* Head title */}
      <div>
        <h1 className="mr-5 text-center text-[40px] font-bold">
          Our{" "}
          <span className="font-poppins uppercase text-[#ED1C24]">
            principles and policies{" "}
          </span>
        </h1>
        <p className="text-center font-poppins">
          Dive into the values and principles that drive our quest for safety
          and security. Get to know the goals and policies shaping our work and
          your protection
        </p>
      </div>
      {/* principle and police card */}
      <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-20 py-10 max-w-[1200px]">
        {principleAndPolicy.map((pnp, index) => (
          <div
            key={pnp.id}
            className={cn(
              `relative flex min-h-[275px] flex-col items-center justify-center bg-gradient-to-r from-red-600 to-red-800 p-4`,
              principleAndPolicy.length % 2 !== 0 &&
                index === principleAndPolicy.length - 1 &&
                "col-span-2 mx-auto",
            )}
          >
            <div className="absolute left-[55%] top-0 -m-8 flex h-[66px] w-[66px] -translate-x-[50%] items-center justify-center overflow-hidden rounded-full border-2 border-red-800 bg-white p-2">
              <Image
                src={pnp.imageSrc}
                alt={`${pnp.title} icon`}
                width={50}
                height={50}
              />
            </div>
            <h3 className="font-montserrat text-3xl font-bold text-white">
              {pnp.title}
            </h3>
            <div
              dangerouslySetInnerHTML={{ __html: pnp.description }}
              className="mx-8 mt-6 font-poppins text-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
