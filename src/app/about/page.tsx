import AboutHero from "./AboutHero";
import Advice from "./Advice";
import Experience from "./Experience";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <div className="bg-[#F9F6EE]">
        <Experience />
        <Advice />
      </div>
    </div>
  );
}
