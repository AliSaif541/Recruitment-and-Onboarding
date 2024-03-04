import React from "react";
import AboutUSHead from "../components/AboutUSHead";
import TextSectionImg from "../components/TextSectionImg";
import BenefitSection from "../components/BenefitSection";
import "../styles/Aboutus.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Aboutus = () => {
  return (
    <div className="frame-container">
      <main className="about-us">
        <Header />
        <section className="rectangle-frame">
          <AboutUSHead />
          <TextSectionImg />
          <BenefitSection />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Aboutus;
