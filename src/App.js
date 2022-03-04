import React, { useEffect } from "react";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skill";
import ContactMe from "./components/Contact";

import "aos/dist/aos.css";
// import { useEffect } from "react";
import "./App.css";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });

  return (
    <div className="min-h-full py-5 bg-gray-100 px-3 sm:px-5 ">
      <div data-aos="fade-down" data-aos-duration="1000">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <About />
      </div>

      <Skills />
      <ContactMe />

      <Footer />
    </div>
  );
}

export default App;
