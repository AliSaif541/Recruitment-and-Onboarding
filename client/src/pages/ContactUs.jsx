import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import '../styles/ContactUs.css';
import instaLogo from '../images/instaLogo.png'; // Import the instaLogo image
import twitterLogo from '../images/twitterLogo.png'; // Import the twitterLogo image
import discordLogo from '../images/discordLogo.png'; // Import the discordLogo image
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:recruitment.onboarding541@gmail.com?subject=${encodeURIComponent(formData.firstName + ' ' + formData.lastName + ' - ' + formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <Header />
      <h1 className='contactus-h1'>Contact Us</h1>
      <p className='contactus-p'>Any question or remarks? Just write us a message!</p>
      <div className="contact-us-container">
        <div className="contact-us-body">
          <h1>Contact Information</h1>
          <h2>Say something to start a live chat!</h2>
          <h3> 📞 (042) 35740280</h3>
          <h3> ✉️ recruitment.onboarding541@gmail.com</h3>
          <h4> 📍 Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore, Punjab</h4>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-inputs">
            <div className="input-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="message">Subject:</label>
            <textarea id="subject" name="subject" value={formData.subject} onChange={handleChange} required></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className='contactus-btn'>Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
