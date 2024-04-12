import React from 'react';

const FeedbackBox = ({ data }) => {
  return (
    <div className="feedback-box">
      <div className="feedback-header">
        <h3 className="feedback-name">{data.name}</h3>
        <div className="star-rating">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={`star ${index < data.rating ? 'star-filled' : ''}`}>
              &#9733;  {/* Unicode star character */}
            </span>
          ))}
        </div>
      </div>
      <p className="feedback-comment">{data.comment}</p>
    </div>
  );
};

export default FeedbackBox;
