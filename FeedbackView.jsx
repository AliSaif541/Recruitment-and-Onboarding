import React from 'react';
import './FeedbackBox.css';
import FeedbackBox from './FeedbackBox'; // Import the FeedbackBox

// Sample data array, you can add more data or fetch from an API
const data = [
  { name: 'John Doe', comment: 'Great, will come again!', rating: 5 },
  { name: 'Jane Smith', comment: 'Good', rating: 3 },
  { name: 'Emily Johnson', comment: 'Not what I expected, but decent overall.', rating: 2 },
  { name: 'Michael Bay', comment: 'Fantastic experience!', rating: 4 },
  { name: 'John Doe', comment: 'Great service, will come again!', rating: 5 },
  { name: 'Jane Smith', comment: 'Good', rating: 3 },
  { name: 'Emily Johnson', comment: 'Not what I expected', rating: 2 },
  { name: 'Michael Bay', comment: 'Fantastic experience!', rating: 4 },
  { name: 'Jane Smith', comment: 'Good', rating: 3 },

  // Add more reviews as needed
];

function FeedbackView() {
  // Calculate total reviews
  const totalReviews = data.length;

  // Calculate average rating
  const averageRating = data.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews;
  const roundedAverage = Math.round(averageRating * 10) / 10;  // Rounds to one decimal place
  return (
    <div className="content-container">
      <h2>Customer Feedback ({totalReviews} reviews) - Average: {roundedAverage} Stars</h2>
      <div className="box-container">
        {data.map((item, index) => (
          <FeedbackBox key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
export default FeedbackView;
