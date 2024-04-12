import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Onboarding/FeedbackBox.css';
import FeedbackBox from '../../components/Onboarding/FeedbackBox'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import animation from '../../images/Animation-Review-2.json'
import TrainingComponentHead from '../../components/Onboarding/TrainingComponentHead';

function FeedbackView() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/review');
      let data = await response.data;
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
      console.log("data: ", data)
      setReviews(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setLoading(false);
    }
  };

  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 ? reviews.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews : 0;
  const roundedAverage = Math.round(averageRating * 10) / 10; 

  const description = "As HR, this platform provides invaluable insights into our new employees' journey. Your feedback illuminates areas for growth and refinement within our organization, enabling us to cultivate a workplace culture that prioritizes employee satisfaction and success.";

  return (
    <div>
        <Header />
        <TrainingComponentHead title="View Employees Feedback" description={description} animation={animation}/>
        <div className="Feedback-content-container">
            <h2 className='Feedback-h2'>Customer Feedback ({totalReviews} reviews) - Average: {roundedAverage} Stars</h2>
            <div className="Feedback-box-container">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  reviews.map((review, index) => (
                    <FeedbackBox key={index} data={review} />
                  ))
                )}
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default FeedbackView;