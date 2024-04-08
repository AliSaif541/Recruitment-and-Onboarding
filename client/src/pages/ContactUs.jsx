import React from 'react';
import '../styles/ContactUs.css';
import instaLogo from '../images/instaLogo.png'; // Import the instaLogo image
import twitterLogo from '../images/twitterLogo.png'; // Import the twitterLogo image
import discordLogo from '../images/discordLogo.png'; // Import the discordLogo image
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactUs() {
  return (
    <div>
      <Header />
      <h1 className='contactus-h1'>Contact Us</h1>
      <p className='contactus-p'>Any question or remarks? Just write us a message!</p>
      <div className="contact-us-container">
        <div className="contact-us-body">
          <h1>Contact Information</h1>
          <h2>Say something to start a live chat!</h2>
          <h3> 📞 +1012 3456 789</h3>
          <h3> ✉️ demo@gmail.com</h3>
          <h4> 📍 132 Dartmouth Street Boston, Massachusetts 02156 United States</h4>
          <div className="social-icons">
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
        <form className="contact-form">
          <div className="name-inputs">
            <div className="input-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          <div className="name-inputs">
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="input-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>

          <div className="input-group">
            <span>Select Subject:</span>
            <div className="radio-buttons">
              <label>
                <input type="radio" name="subject" value="General Inquiry" />
                General Inquiry
              </label>
              <label>
                <input type="radio" name="subject" value="Technical Support" />
                General Inquiry
              </label>
              <label>
                <input type="radio" name="subject" value="Billing Issue" />
                General Inquiry
              </label>
              <label>
                <input type="radio" name="subject" value="Other" />
                General Inquiry
              </label>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          
          <button className='contactus-btn' type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
