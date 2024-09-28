import Testimonial from "../(home)/Testimonial";
import AboutHero from "./AboutHero";
import Advice from "./Advice";
import BusinessLinks from "./BusinessLinks";
import Experience from "./Experience";
import OurCoreActivity from "./OurCoreActivity";
import OurStrategy from "./OurStrategy";

export default function AboutPage() {
  return (
    <div className="bg-[#F9F6EE]">
      <AboutHero />
      <Experience />
      <Advice />
      <BusinessLinks />
      <OurStrategy />
      <OurCoreActivity />
      <Testimonial />
    </div>
  );
}
