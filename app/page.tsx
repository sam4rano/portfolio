import Footer from "@/Footer";
import About from "./About";
import Contact from "./Contact";
import Herosection from "./Herosection";
import Navbar from "./Navbar";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Herosection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
