import { FaQuoteLeft } from "react-icons/fa";

export default function Advice() {
  return (
    <div
      className="mx-auto mt-20 max-w-7xl border-2 border-l-0 border-r-0 p-5"
      style={{
        borderImage: `linear-gradient(to left, rgba(0, 0, 0, 0),#ed1c24, rgba(0, 0, 0, 0)) 1`,
      }}
    >
      <div className="flex">
        <FaQuoteLeft size={50} className="shrink-0 text-[#ed1c24]" />
        <p className="mt-6 text-center leading-7">
          The Safety of Life, Property and Environment is essential not only for
          present but also for the generations to come, as it is our
          responsibility to ensure safety excellence at all levels to achieve
          our existence safe and sustain daily activities free from incidents,
          all we need to do only assure obedience to the safety requirement and
          ensure protective measures are implemented and maintained.
        </p>
      </div>
      <div>
        <p className="mt-5 text-center font-poppins text-xl font-semibold italic text-[#ed1c24]">
          Managing Partners, FSM Bangladesh
        </p>
      </div>
    </div>
  );
}
