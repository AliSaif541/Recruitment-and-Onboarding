import React from "react";
import AboutUSHead from "../components/Aboutus/AboutUSHead";
import TextSectionImg from "../components/Aboutus/TextSectionImg";
import BenefitSection from "../components/Aboutus/BenefitSection";
import "../styles/Aboutus/Aboutus.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Aboutus = ({ user, setUser}) => {
  return (
    <div className="frame-container-ab">
      <main className="about-us-ab">
        <Header user={user} setUser={setUser} />
        <section className="rectangle-frame-ab">
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
