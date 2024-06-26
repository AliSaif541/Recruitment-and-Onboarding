import React from "react";
import FullTimeLabel from "../components/CareersPage/FullTimeLabel";
import HeaderDetailsFrame from "../components/CareersPage/HeaderDetailsFrame";
import LookingForOpportunity from "../components/CareersPage/LookingForOpportunity";
import "../styles/CareersPage/CareersPage.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

const CareersPage = ({ setCurrentJob, user, setUser }) => {
  return (
    <div className="careers-page">
      <Header user={user} setUser={setUser} />
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