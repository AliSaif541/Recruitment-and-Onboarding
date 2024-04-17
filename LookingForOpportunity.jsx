import React from "react";
import "../../styles/CareersPage/LookingForOpportunity.css";

const LookingForOpportunity = () => {
  return (
    <section className="looking-for-opportunity1-careers">
      <div className="group-careers">
        <div className="contact-parent-careers">
          <h1 className="contact-careers">Contact</h1>
          <div className="looking-for-a-new-opportunity-parent-careers">
            <h1 className="looking-for-a-careers">Looking for a new opportunity?</h1>
            <h1 className="lorem-ipsum-dolor1-careers">
            Ready to embark on a journey of professional development? Join our team and unlock a world of growth and innovation. Dive into new projects and embrace fresh challenges that push your career to new heights. We foster a culture of collaboration and creativity, where every contribution is valued and every idea is nurtured. Step into a dynamic environment where your skills are honed, and your potential is realized.
            </h1>
          </div>
        </div>
        <form className="group1-careers">
          <div className="submit-careers">
            <div className="materialsymbolsarrowforward-careers">
              <h1 className="full-name-careers">Full Name</h1>
              <input className="text-careers" type="text" placeholder="Enter your full name" />
            </div>
          </div>
          <div className="contact-number-parent-careers">
            <h1 className="contact-number-careers">Contact Number</h1>
            <input className="text1-careers" type="text" placeholder="Enter your contact number" />
          </div>
          <button className="rectangle-group-careers">
            <div className="submit12-careers">Submit</div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default LookingForOpportunity;
