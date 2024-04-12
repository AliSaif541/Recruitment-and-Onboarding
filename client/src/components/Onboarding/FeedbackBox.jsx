import React from 'react';

const FeedbackBox = ({ data }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="feedback-box">
      <div className="feedback-header">
        <h3 className="feedback-name">{data.name}</h3>
        <div className="star-rating">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={`star ${index < data.rating ? 'star-filled' : ''}`}>
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <p className='Feedback-role'>{data.role}</p>
      <p className="feedback-comment">{data.review}</p>
      <p className='Feedback-date'>{formatDate(data.date)}</p> 
    </div>
  );
};

export default FeedbackBox;
