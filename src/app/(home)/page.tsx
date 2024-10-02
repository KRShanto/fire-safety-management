import HeroVideo from "@/components/HeroVideo";
import About from "./About";
import Affiliates from "./Affiliates";
import Certificates from "./Certificates";
import Experience from "./Experience";
import Hero from "./Hero";
import LatestNews from "./LatestNews";
import Partners from "./Partners";
import Product from "./Product";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Values from "./Values";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <About />
      <Affiliates />
      <Product />
      <Service />
      <Values />
      <Certificates />
      <Partners />
      <Testimonial />
      <LatestNews />
    </div>
  );
}
