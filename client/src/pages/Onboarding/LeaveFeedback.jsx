import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Lottie from 'react-lottie';
import axios from 'axios'; // Import axios for making HTTP requests
import { jwtDecode } from "jwt-decode";
import reviewAnimation from '../../images/Animation-Review-1.json';
import animation from '../../images/Animation-Review-2.json'
import '../../styles/Onboarding/LeaveFeedback.css';
import TrainingComponentHead from '../../components/Onboarding/TrainingComponentHead';
import ReviewHead from '../../components/Onboarding/ReviewHead';
import OnboardingHeader from '../../components/OnboardingHeader';

function LeaveFeedback() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [error, setError] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const token = localStorage.getItem("token");
  let user = null;

  if (token) {
    user = jwtDecode(token);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "https://recruitment-and-onboarding-backend.vercel.app/api/review";
      const date = new Date(); // Get current date
      const { data: res } = await axios.post(url, {
        rating,
        date,
        name: user.name, 
        role: user.role,
        review
      });

      setError("Review Submitted Succesfully!");

    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const description = "We value your input! Share your thoughts on your onboarding experience here. Your feedback helps us refine our process to ensure a smooth and enriching journey for all newcomers.";

  return (
    <div>
      <OnboardingHeader />
      <TrainingComponentHead title={"Leave Feedback"} description={description} animation={animation} />
      <h1 className='review-h1'>Write Review</h1>
      <p className='review-p'>Give us your honest review. Don't hesitate to critique!</p>
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
            <textarea id="review" name="review" value={review} onChange={handleReviewChange} required></textarea>
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
          {error && <p className='error'>{error}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LeaveFeedback;
