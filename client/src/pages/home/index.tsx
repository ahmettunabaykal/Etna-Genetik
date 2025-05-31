import Hero from "./Hero";
import Partners from "./Partners";
import WhatWeOffer from "./WhatWeOffer";
import GeneticTests from "./GeneticTests";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import BlogPreview from "./BlogPreview";
import CallToAction from "./CallToAction";
import { useEffect } from "react";
import { useLocation } from "wouter";

const Home = () => {
  const [, setLocation] = useLocation();

  // Handle anchor links for smooth scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Handle hash on initial load
    handleHashChange();

    // Set up listener for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div>
      <Hero />
      <Partners />
      <WhatWeOffer />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
      <CallToAction />
    </div>
  );
};

export default Home;
