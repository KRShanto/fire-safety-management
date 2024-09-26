import About from "./About";
import Affiliates from "./Affiliates";
import Experience from "./Experience";
import Hero from "./Hero";
import Product from "./Product";
import Service from "./Service";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <About />
      <Affiliates />
      <Product />
      <Service />
    </div>
  );
}
