import React, { useState } from 'react';
import '../styles/ContactUs.css';
import Header from './Header';
import Footer from './Footer';
import Lottie from 'react-lottie';
import reviewAnimation from './review_animation.json';

function ContactUs() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <Header />
      <h1 className='review-h1'>Write Review</h1>
      <p className='review-p'>Any comments or remarks? Just write us a message!</p>
      <div className="review-container">
        <div className="review-animation-body">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: reviewAnimation,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
            height={400}
            width={400}
          />
        </div>
        <form className="review-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="review">Leave a Review:</label>
            <textarea id="review" name="review" required></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="rating">Leave a Rating:</label>
            <div className="star-rating">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={index < rating ? 'star-filled' : 'star'}
                  onClick={() => handleRatingChange(index + 1)}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
          <button className='review-btn' type="submit">Submit Review</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
