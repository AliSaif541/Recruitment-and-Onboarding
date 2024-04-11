
import React from 'react';
import '../styles/ContactUs.css';
import Header from './Header';
import Footer from './Footer';
import BoxComponent from './BoxComponent'; // Import the BoxComponent
import animationData from './animation.json'; // Update the path
import Lottie from 'react-lottie';
import image from '../logos/thumbnail.png';

// // Will have to run this command in terminal to run the animation
// // npm install --save react-lottie


const data = [
  { imageUrl: image, title: 'Box Title 1' },
  { imageUrl: image, title: 'Box Title 2' },
  { imageUrl: image, title: 'Box Title 3' },
  { imageUrl: image, title: 'Box Title 4' },
  { imageUrl: image, title: 'Box Title 5' },
  { imageUrl: image, title: 'Box Title 6' },
  { imageUrl: image, title: 'Box Title 7' },
  { imageUrl: image, title: 'Box Title 8' },
  // Add more data as needed
];

function ContactUs() {
  return (
    <div>
      <Header />
      <div className="content-container">
        <div className="info-box">
          <div className="info-text">
            <h2>Heading Text for the Modules page </h2>
            <p>Leverage integrations with numerous tools across your landscape to continuously monitor and collect evidence of your security posture.</p>
          </div>
          <div className="animation-container">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
              height={300} // Adjust the height as needed
              width={400} // Adjust the width as needed
            />
          </div>
        </div>
      </div>
      <div className="box-container">
        {data.map((item, index) => (
          <BoxComponent key={index} data={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
