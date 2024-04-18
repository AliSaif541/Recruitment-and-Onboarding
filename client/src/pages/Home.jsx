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
          Join DEVSINC, the future of software solutions. We are a team of talented and passionate individuals who are dedicated to providing the best software solutions to our clients. We are always looking for new talent to join our team. If you are passionate about software development, testing, or IT consulting, we want to hear from you. Check out our job postings below to see if there is a position that is right for you.
        </div>
      </div>

      <div className="Careers-part-home">
        <h1 className="our-careers-heading">Our Careers</h1>
        <div className="careers-section">
          <h2 className="careers-title">IT consulting</h2>
          <ul className="careers-list">
            <li>Join our IT consulting team and help businesses navigate the complexities of technology implementation. We're looking for problem-solvers with a passion for innovation.</li>
            <li>Explore opportunities in IT consulting where your expertise can make a real difference in optimizing businesses' IT strategies and operations.</li>
          </ul>
        </div>
        <div className="careers-section">
          <h2 className="careers-title">Software Development</h2>
          <ul className="careers-list">
            <li>Be a part of our dynamic software development team and contribute to building cutting-edge solutions that drive our clients' success.</li>
            <li>Join us in shaping the future of software development by creating scalable and efficient solutions tailored to our clients' needs.</li>
          </ul>
        </div>
        <div className="careers-section">
          <h2 className="careers-title">Testing and QA</h2>
          <ul className="careers-list">
            <li>Join our testing and QA team to ensure the quality and reliability of our software solutions. Your attention to detail and analytical skills will be crucial in delivering top-notch products.</li>
            <li>Explore opportunities in testing and QA where you can contribute to maintaining the high standards of our software products through rigorous testing processes.</li>
          </ul>
        </div>
      </div>

      <div className="job-postings-container">
        <h1 className="our-careers-heading">Job Postings</h1>

        {/* Job #1 */}
        <div className="job-posting-row">
          <div className="job-posting">
            <h2 className="job-title">Software Engineer</h2>
            <p className="job-description">Join our team as a Software Engineer and work on exciting projects that push the boundaries of innovation. We're looking for creative problem-solvers who are passionate about technology.</p>
            <Link to="/job-detail/1" className="learn-more-btn">Learn More →</Link>
          </div>
        </div>

        {/* Job #2 */}
        <div className="job-posting-row">
          <div className="job-posting">
            <h2 className="job-title">Quality Assurance Analyst</h2>
            <p className="job-description">We're seeking a detail-oriented Quality Assurance Analyst to ensure the quality and reliability of our software products. Join us in maintaining high standards and delivering exceptional user experiences.</p>
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