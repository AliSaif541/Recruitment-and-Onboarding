import React from 'react';
import '../../styles/Aboutus/TextSectionImg.css';
import arrow from "../../images/arrow.png"
import coloredbulb from "../../images/colored bulb.png"

const TextSectionImg = () => {
  return (
    <div className="text-section-img">
      <div className="card-benefit">
        <div className="ellipse-frame-standardization">
          <div className="image-bg" />
          <img
            className="section-img-icon"
            loading="lazy"
            alt=""
            src={coloredbulb}
          />
        </div>
        <div className="global-workplace-reproduction">
          <div className="learner-retention-custom-e-lea">
            <h3 className="features">Features</h3>
            <h1 className="we-are-always">
              We are always working to provide you the best features in all aspects.
            </h1>
            <div className="at-devsinc-the-container">
              <span>
                At DevSinc, the chief determination is to clear the minds of our students
                about their goals, while making them consistent in their
                ambitions and pushing them to be confident for their journey
                towards the course of time.
              </span>
            </div>
          </div>
          <div className="arrow-forward-rounded-frame">
            <div className="you-will-find-container">
              <p className="you-will-find">
                You will find every little thing on the internet with just a click of your hand, but here we believe that without knowledge and practice, the internet may even fail you in your life.
              </p>
            </div>
            <button className="button3">
              <div className="contact-us4">Learn More</div>
              <img
                className="material-symbolsarrow-forward-icon1"
                alt=""
                src={arrow}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSectionImg;
