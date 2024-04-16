import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../styles/home.css";
import FullTimeLabel from "../components/CareersPage/FullTimeLabel";
import instaLogo from '../images/instaLogo.png'; // Import the instaLogo image
import twitterLogo from '../images/twitterLogo.png'; // Import the twitterLogo image
import discordLogo from '../images/discordLogo.png'; // Import the discordLogo image


function Home() {

  return (
    <div className="company-website-homepage">
      <Header />
      <FullTimeLabel />

      <div className="Aboutus-part-home">
        <h1 className="about-company-about">
          <p className="about-company1-about">About Company</p>
        </h1>
        <div className="careers-lorem-ipsum-dolor1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis mi
          nunc bibendum. Tellus elementum nec lorem eget dictumst. Risus in
          gravida eu, enim lorem. Sed consequat ut suspendisse eros. Nunc nunc
          accumsan, viverra enim. Mi.
        </div>
      </div>

      <div className="Careers-part-home">
        <h1 className="our-careers-heading">Our Careers</h1>
        <div className="careers-section">
          <h2 className="careers-title">IT consulting</h2>
          <ul className="careers-list">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis mi nunc bibendum. Tellus elementum nec lorem eget dictumst.</li>
            <li>Risus in gravida eu, enim lorem. Sed consequat ut suspendisse eros. Nunc nunc accumsan, viverra enim.</li>
          </ul>
        </div>
        <div className="careers-section">
          <h2 className="careers-title">Software Development</h2>
          <ul className="careers-list">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis mi nunc bibendum. Tellus elementum nec lorem eget dictumst.</li>
            <li>Risus in gravida eu, enim lorem. Sed consequat ut suspendisse eros. Nunc nunc accumsan, viverra enim.</li>
          </ul>
        </div>
        <div className="careers-section">
          <h2 className="careers-title">Testing and QA</h2>
          <ul className="careers-list">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis mi nunc bibendum. Tellus elementum nec lorem eget dictumst.</li>
            <li>Risus in gravida eu, enim lorem. Sed consequat ut suspendisse eros. Nunc nunc accumsan, viverra enim.</li>
          </ul>
        </div>
      </div>

      <div className="job-postings-container">
  <h1 className="our-careers-heading">Job Postings</h1>

  {/* Job #1 */}
  <div className="job-posting-row">
    <div className="job-posting">
      <h2 className="job-title">Job #1</h2>
      <p className="job-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.</p>
      <Link to="/job-detail/1" className="learn-more-btn">Learn More →</Link>
    </div>
  </div>

  {/* Job #2 */}
  <div className="job-posting-row">
    <div className="job-posting">
      <h2 className="job-title">Job #2</h2>
      <p className="job-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.</p>
      <Link to="/job-detail/2" className="learn-more-btn">Learn More →</Link>
    </div>
  </div>

  <div className="view-all-btn-container">
    <Link to="/careers" className="view-all-btn">View All Job Postings</Link>
  </div>
</div>

<div className="contact-us-containerhome">
        <div className="contact-us-bodyhome">
          <h1 className="contacttinfohome">Contact Information</h1>
          <h3 className="contacttt"> 📞 +1012 3456 789</h3>
          <h3 className="contacttt"> ✉️ demo@gmail.com</h3>
          <h4 className="contacttt"> 📍 132 Dartmouth Street Boston, Massachusetts 02156 United States</h4>
          <div className="social-iconshome">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instaLogo} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <img src={discordLogo} alt="Discord" />
            </a>

          </div>
          </div>
        </div>





      <Footer />
    </div>
  );
}

export default Home;