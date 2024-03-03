import React from 'react';
import "../styles/DescriptionFrame.css";

const DescriptionFrame = () => {
  return (
    <div className="description-frame">
      <div className="frame-parent">
        <div className="rectangle-container">
          <div className="rectangle-div"></div>
          <div className="frame-wrapper">
            <div className="location-parent">
              <h2 className="location">Location</h2>
              <div className="manchester-uk1">Manchester, UK</div>
            </div>
          </div>
          <div className="line-wrapper">
            <div className="line-div"></div>
          </div>
          <div className="salary-range-frame">
            <h2 className="salary">Salary</h2>
            <div className="per-annum">
              £45000 - £65000 per annum + Bonus + Pension + Benefits
            </div>
          </div>
          <div className="line-container">
            <div className="frame-child1"></div>
          </div>
          <div className="frame-container">
            <div className="job-type-parent">
              <h2 className="job-type">Job Type</h2>
              <div className="hybrid-permanent">Hybrid, Permanent</div>
            </div>
          </div>
        </div>
        <div className="job-details">
          <div className="group-div">
            <div className="frame-child2"></div>
            <h2 className="reference">Reference</h2>
            <div className="fdman2038-234">#FDMAN2038-234</div>
          </div>
          <img
            className="job-details-child"
            loading="lazy"
            alt=""
            src="/group-2@2x.png"
          />
        </div>
        <div className="frame-container1">
          <h2 className="apply-for-this">Apply for this role</h2>
        </div>
      </div>
      <div className="job-posting">
        <div className="frontend-developer-details">
          <div className="tech-stack">
            <h2 className="description">Description</h2>
            <div className="job-location-manchester">
              <b className="front-end-developer">Front End Developer</b>
              <b className="uk-leading-ecommerce">
                UK Leading Ecommerce Firm – Manchester – Hybrid
              </b>
            </div>
          </div>
          <div className="tech-stack-front-container">
            <p className="tech-stack-front">
              (Tech stack: Front End Developer, React, ReactJS 18, React Hooks,
              React.js, Shopify platform, JavaScript, TypeScript, HTML, CSS, UI,
              UX, User Interface, User Experience, Javascript Developer, Front
              End Engineer, Front End Developer)
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="our-client-is">
              Our client is UK’s leading Ecommerce clothing company. They are
              looking for a Front End Developer with experience in React and
              Shopify platform. You will be responsible for predominantly
              implementing new Figma designs and functionality to the Shopify
              store, through fluent, maintainable code. You will work alongside
              designers within the creative team, and other senior members on
              multiple technical projects.
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="my-client-is">
              My client is looking for Front End Developers who has current and
              relevant experience working with React and Shopify platform. You
              will be building new pages, features and functionality on the
              Ecommerce site. You will also discover and debug issues and ensure
              the consistent quality and UX across all devices and browsers.
            </p>
            <p className="blank-line2">&nbsp;</p>
            <p className="our-client-is1">
              Our client is looking for passionate Front End Developers with
              experience in some or all of the following (full training will be
              provided to fill any gaps in your skill set): React, ReactJS 18,
              React Hooks, React.js, Shopify platform, JavaScript, TypeScript,
              HTML, CSS, GIT, API’s, UI, UX, User Interface, User Experience.
            </p>
          </div>
        </div>
        <div className="line-separator"></div>
      </div>
    </div>
  );
};

export default DescriptionFrame;
