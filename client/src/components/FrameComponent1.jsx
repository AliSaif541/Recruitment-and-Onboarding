import "../styles/FrameComponent1.css";
import arrow from "../images/arrow.png";
import hallwayImage from '../images/hallway.jpg';
import laptopwork from "../images/laptopwork.jpg";

const FrameComponent1 = () => {
  return (
    <section className="jobs-content-wrapper">
      <div className="jobs-content">
        <div className="jobs-header">
          <div className="jobs-title">
            <h1 className="job-postings">Job Postings</h1>
          </div>
          <div className="job-listings">
            <div className="job-posting">
              <h3 className="job-1">Job #1</h3>
              <p className="lorem-ipsum-dolor4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat bibendum sit felis, sollicitudin et. Nulla aliquet
                integer hac ac morbi.
              </p>
            </div>
            <div className="portfolio-updatebro-wrapper">
              <img
                className="portfolio-updatebro-icon"
                loading="lazy"
                alt="Update Bro Icon"
                src={hallwayImage}
              />
            </div>
          </div>
        </div>
        <div className="learn-more-btn-parent">
          <button className="learn-more-btn">
            Learn More
            <div className="learn-more-btn-inner">
              <img className="frame-child2" alt="Arrow Icon" src={arrow} />
            </div>
          </button>
          <div className="development-job">
            <div className="dev-job-content">
              <img
                className="app-developmentrafiki-icon"
                loading="lazy"
                alt="Development Rafiki Icon"
                src={laptopwork}
              />
            </div>
            <div className="dev-job-info">
              <h3 className="job-2">Job #2</h3>
              <p className="lorem-ipsum-dolor5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
                viverra porta tortor, elementum ultrices. Blandit quam nec
                aliquam.
              </p>
            </div>
          </div>
        </div>
        <div className="service-title-wrapper">
          <button className="service-title">
            Learn More
            <div className="service-title-inner">
              <img className="frame-child3" alt="Arrow Icon" src={arrow} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;