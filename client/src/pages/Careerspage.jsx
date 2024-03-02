import React from "react";
import FullTimeLabel from "../components/FullTimeLabel";
import HeaderDetailsFrame from "../components/HeaderDetailsFrame";
import LookingForOpportunity from "../components/LookingForOpportunity";
import "../styles/CareersPage.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

const CareersPage = ({ setCurrentJob }) => {
  return (
    <div className="careers-page">
      <Header />
      <main className="time-label">
        <FullTimeLabel />
        <HeaderDetailsFrame setCurrentJob={setCurrentJob} />
        <LookingForOpportunity />
        <Footer />
      </main>
    </div>
  );
};

export default CareersPage;