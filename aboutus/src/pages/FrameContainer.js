import React from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import SectionFrame from "../components/SectionFrame";
import TextSectionImg from "../components/TextSectionImg";
import BenefitSection from "../components/BenefitSection";
import "../styles/FrameContainer.css";

const FrameContainer = () => {
  return (
    <div className="frame-container">
      <main className="about-us">
        <div className="about-us-child"></div>
        <div className="rectangle-parent">
          <div className="frame-child"></div>
          <div className="frame-parent">
            <div className="image-2-parent">
              <img className="image-2-icon" alt="" src="/image-2@2x.png" />
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <div className="label">Email</div>
                    <div className="input">
                      <div className="content">
                        <img className="search-icon" alt="" src="/search.svg" />
                        <div className="text">Want to learn?</div>
                        <div className="button">
                          <div className="button-base">
                            <div className="text1">Explore</div>
                            <img
                              className="chevron-down-icon"
                              alt=""
                              src="/chevrondown.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-parent">
              <div className="home">Home</div>
              <div className="about-us1">About us</div>
              <div className="courses">Courses</div>
              <div className="contact-us">Contact us</div>
              <div className="faqs">FAQ’s</div>
            </div>
          </div>
          <div className="sign-in">Sign in</div>
          <div className="button1">
            <div className="button-base1">
              <div className="text2">Create free account</div>
            </div>
          </div>
        </div>
        <div className="recruit">Recruit.</div>
        <div className="about">About</div>
        <div className="home1">Home</div>
        <header className="about-us-item"></header>
        <section className="career-page-frame">
          <FrameComponent1 />
          <FrameComponent />
        </section>
        <section className="rectangle-frame">
          <SectionFrame />
          <TextSectionImg />
          <BenefitSection />
          <footer className="rectangle-group">
            <div className="frame-item"></div>
            <div className="devsinc">Devsinc</div>
            <div className="company-2022">
              Company , 2022 © All Rights Reserved
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default FrameContainer;
