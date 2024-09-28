import AboutHero from "./AboutHero";
import AboutTestimonial from "./AboutTestimonial";
import Advice from "./Advice";
import BusinessLinks from "./BusinessLinks";
import Experience from "./Experience";
import OurCoreActivity from "./OurCoreActivity";
import OurPrincipleAndPolice from "./OurPrincipleAndPolice";
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
      <OurPrincipleAndPolice />
      <AboutTestimonial />
    </div>
  );
}
