import About from "./About";
import Affiliates from "./Affiliates";
import Certificates from "./Certificates";
import Experience from "./Experience";
import Hero from "./Hero";
import Partners from "./Partners";
import Product from "./Product";
import Service from "./Service";
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
    </div>
  );
}
