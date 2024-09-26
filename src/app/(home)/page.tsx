import About from "./About";
import Affiliates from "./Affiliates";
import Experience from "./Experience";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <About />
      <Affiliates />
    </div>
  );
}
