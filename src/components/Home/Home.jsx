import React from "react";

import { Hero } from "../sections/Hero/Hero";
import { Header } from "../../components/layout/Header/Header.jsx";
import { About } from "../sections/About/About";
import { Theater } from "../sections/Theater/Theater";
import { Experience } from "../sections/Experience/Experience";
import { Teachers } from "../sections/TeacherSection/Teachers.jsx";
import { Classes } from "../sections/Classes/Classes.jsx";
import { CTA } from "../sections/CTA/CTA.jsx";
import { Footer } from "../layout/Footer/Footer.jsx";

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
