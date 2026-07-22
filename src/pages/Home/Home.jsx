import React from "react";

import { Hero } from "../../components/sections/Hero/Hero.jsx";
import { Header } from "../../components/layout/Header/Header.jsx";
import { About } from "../../components/sections/About/About.jsx";
import { Theater } from "../../components/sections/Theater/Theater.jsx";
import { Experience } from "../../components/sections/Experience/Experience.jsx";
import { Teachers } from "../../components/sections/TeacherSection/Teachers.jsx";
import { Classes } from "../../components/sections/Classes/Classes.jsx";
import { CTA } from "../../components/sections/CTA/CTA.jsx";
import { Footer } from "../../components/layout/Footer/Footer.jsx";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Theater />
        <About />
        <Experience />
        <Teachers />
        <Classes />
        <CTA />
        <Footer />
      </main>
    </>
  );
};
