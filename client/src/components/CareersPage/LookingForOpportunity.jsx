import React from "react";
import "../../styles/CareersPage/LookingForOpportunity.css";

const LookingForOpportunity = () => {
  return (
    <section className="looking-for-opportunity1-careers">
      <div className="group-careers">
        <div className="contact-parent-careers">
          <h1 className="contact-careers">contact</h1>
          <div className="looking-for-a-new-opportunity-parent-careers">
            <h1 className="looking-for-a-careers">Looking for a new opportunity?</h1>
            <h1 className="lorem-ipsum-dolor1-careers">
              Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed
              blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet
              velit magna a aliquam. Faucibus et quam ac elit placerat tristique
              vulputate
            </h1>
          </div>
        </div>
        <form className="group1-careers">
          <div className="submit-careers">
            <div className="materialsymbolsarrowforward-careers">
              <h1 className="full-name-careers">Full Name</h1>
              <input className="text-careers" type="text" />
            </div>
          </div>
          <div className="contact-number-parent-careers">
            <h1 className="contact-number-careers">Contact Number</h1>
            <input className="text1-careers" type="text" />
          </div>
          <button className="rectangle-group-careers">
            <div className="submit12">Submit</div>
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
