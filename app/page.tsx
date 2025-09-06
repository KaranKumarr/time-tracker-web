import Image from "next/image";
import Navbar from "@/components/LandingPage/Navbar";
import Hero from "@/components/LandingPage/Hero";
import Features from "@/components/LandingPage/Features";
import HowItWorks from "@/components/LandingPage/HowItWorks";
import CTA from "@/components/LandingPage/CTA";
import Pricing from "@/components/LandingPage/Pricing";
import Footer from "@/components/LandingPage/Footer";

export default function Home() {
  return (
        <>
            <Navbar/>
            <Hero/>
            <Features/>
            <HowItWorks/>
            <Pricing/>
            <CTA/>
            <Footer/>
        </>
  );
}
