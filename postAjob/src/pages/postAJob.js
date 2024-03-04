import React from "react";
import NavigationSidebarExpanded from "../components/NavigationSidebarExpanded";
import TextInputs from "../components/TextInputs";
import "../styles/PostAJob.css";

const PostAJob = () => {
  return (
    <form className="post-a-job">
      <img className="f452489720-icon" loading="lazy" alt="" src="/f452489720@2x.png" />
      <img className="f452489720-icon1" alt="" src="/f452489720@2x.png" />
      <div className="frame-parent">
        <div className="frame-group">
          <div className="frame-container">
            <div className="frame-div">
              <div className="frame-parent1">
                <div className="navigationsidebarexpanded-parent">
                  <NavigationSidebarExpanded />
                  <div className="f452489720-parent">
                    <img className="f452489720-icon2" alt="" src="/f452489720-2@2x.png" />
                    <img className="f452489720-icon3" alt="" src="/f452489720-2@2x.png" />
                  </div>
                </div>
                <div className="frame-parent2">
                  <div className="frame-wrapper">
                    <div className="post-job-frame-parent">
                      <section className="post-job-frame">
                        <h1 className="post-job">Post Job</h1>
                      </section>
                      <div className="frame-parent3">
                        <div className="text-inputs-parent">
                          <TextInputs
                            icon="/icon-1.svg"
                            assistiveText="Assistive Text"
                            propTop="unset"
                            propBorder="2px solid #7a5cfa"
                            propColor="#666"
                          />
                          <TextInputs
                            icon="/icon.svg"
                            assistiveText="Assistive Text"
                          />
                          <TextInputs
                            icon="/icon-3.svg"
                            assistiveText="Error message informing me of a problem"
                            propTop="unset"
                            propBorder="2px solid #eb5757"
                            propColor="#eb5757"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-text-label-wrapper">
                <div className="input-text-label">Input Text Label</div>
              </div>
            </div>
            <div className="radio-button-wrapper">
              <div className="radio-button">
                <input className="radio" type="radio" name="radioGroup-1" />
                <div className="radio-selection">Radio selection</div>
              </div>
            </div>
          </div>
          <div className="radio-button-container">
            <div className="radio-button1">
              <input className="radio1" checked={true} type="radio" name="radioGroup-1" />
              <div className="radio-selection1">Radio selection</div>
            </div>
          </div>
        </div>
        <div className="radio-button-frame">
          <div className="radio-button2">
            <input className="radio2" type="radio" name="radioGroup-1" />
            <div className="radio-selection2">Radio selection</div>
          </div>
        </div>
      </div>
      <div className="submit-job-button-container">
        <button type="submit" className="submit-job-button">Submit Job</button>
      </div>
      <div className="footer-parent">
        <div className="footer">
          <div className="footer-rectangle" />
          <div className="image-1-parent">
            <img className="image-1-icon" alt="" src="/image-1@2x.png" />
            <div className="all-rights-reserved">
              © 2021 All Rights Reserved to Devsinc
            </div>
          </div>
        </div>
        <img className="f452489720-icon4" alt="" src="/f452489720-2@2x.png" />
      </div>
    </form>
  );
};

export default PostAJob;
