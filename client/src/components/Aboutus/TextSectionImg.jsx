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
                At <span className="omar-text">DevSinc</span>, our commitment is to lead in the digital transformation, providing globally agile services to clients in different countries. In these times of recent changes, our ever-growing pool of resilient tech heads drives the IT world toward a future where innovation meets the demands of an ever-evolving digital era.
              </span>
            </div>
          </div>
          <div className="arrow-forward-rounded-frame">
            <div className="you-will-find-container">
              <p className="you-will-find">
              Our determination fuels relentless pursuit, turning challenges intOur one-in-all business models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSectionImg;