import React from "react";
import "../styles/LookingForOpportunity.css";

const LookingForOpportunity = () => {
  return (
    <section className="looking-for-opportunity1">
      <div className="group">
        <div className="contact-parent">
          <h1 className="contact">contact</h1>
          <div className="looking-for-a-new-opportunity-parent">
            <h1 className="looking-for-a">Looking for a new opportunity?</h1>
            <h1 className="lorem-ipsum-dolor1">
              Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed
              blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet
              velit magna a aliquam. Faucibus et quam ac elit placerat tristique
              vulputate
            </h1>
          </div>
        </div>
        <form className="group1">
          <div className="submit">
            <div className="materialsymbolsarrowforward">
              <h1 className="full-name">Full Name</h1>
              <input className="text" type="text" />
            </div>
          </div>
          <div className="contact-number-parent">
            <h1 className="contact-number">Contact Number</h1>
            <input className="text1" type="text" />
          </div>
          <button className="rectangle-group">
            <div className="frame-item" />
            <div className="submit1">Submit</div>
            <img
              className="material-symbolsarrow-forward-icon"
              alt=""
              src="/materialsymbolsarrowforward.svg"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default LookingForOpportunity;
