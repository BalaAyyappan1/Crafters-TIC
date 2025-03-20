import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Blocx from "@/components/Home/Blocx";
import Clients from "@/components/Home/Clients";
import Contact from "@/components/Home/Contact";
import Services from "@/components/Home/Services";
import WhyCrafters from "@/components/Home/WhyCrafters";
import TopNav from "@/components/Reusable Components/TopNav";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <TopNav />
    <Banner />
    <About />
    <Clients />
    <WhyCrafters />
    <Services />
    <Blocx />
    <Contact />
   </div>
  );
}
