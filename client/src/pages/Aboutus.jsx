import React from "react";
import SectionFrame from "../components/SectionFrame";
import TextSectionImg from "../components/TextSectionImg";
import BenefitSection from "../components/BenefitSection";
import "../styles/Aboutus.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Aboutus = () => {
  return (
    <div>
      <Header />
      <section className="rectangle-frame">
        <SectionFrame />
        <TextSectionImg />
        <BenefitSection />
        <Footer />
      </section>
    </div>
  );
};

export default Aboutus;
