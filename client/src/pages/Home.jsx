import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../styles/home.css";
import FullTimeLabel from "../components/FullTimeLabel";

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
        <div className="careers-about1">
          <h1 className="careers-about">
              <p className="careers1-about">IT consulting</p>
            </h1>
            <div className="careers-lorem-ipsum-dolor1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis mi
              nunc bibendum. Tellus elementum nec lorem eget dictumst. Risus in
              gravida eu, enim lorem. Sed consequat ut suspendisse eros. Nunc nunc
              accumsan, viverra enim. Mi.
            </div>
        </div>
        <div className="careers-about1">
          <h1 className="careers-about">
              <p className="careers1-about">Software Development</p>
            </h1>
            <div className="careers-lorem-ipsum-dolor1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis mi
              nunc bibendum. Tellus elementum nec lorem eget dictumst. Risus in
              gravida eu, enim lorem. Sed consequat ut suspendisse eros. Nunc nunc
              accumsan, viverra enim. Mi.
            </div>
        </div>
        <div className="careers-about1">
          <h1 className="careers-about">
              <p className="careers1-about">Testing and QA</p>
            </h1>
            <div className="careers-lorem-ipsum-dolor1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis mi
              nunc bibendum. Tellus elementum nec lorem eget dictumst. Risus in
              gravida eu, enim lorem. Sed consequat ut suspendisse eros. Nunc nunc
              accumsan, viverra enim. Mi.
            </div>
        </div>
      </div>

      <div className="job-postings-container">
        <h1 className="our-careers-heading">Job Postings</h1>
        <div className="job-posting">
          <h2 className="job-postings-home">Web developer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.</p>
          <button className="learn-more-btn">Learn More →</button>
        </div>

        <div className="job-posting">
          <h2>Web developer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.</p>
          <button className="learn-more-btn">Learn More →</button>
        </div>

        <div className="view-all-btn-container">
        <Link className="view-all-btn" to="/careers"><button className="view-all-btn">View All Job Postings</button></Link>
        </div>

      </div>
      <Footer />
    </div>
  );
}
  
export default Home;