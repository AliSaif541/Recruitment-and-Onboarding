import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../images/Animation-Review-2.json'
import '../../styles/Onboarding/TrainingComponentHead.css'

const ReviewHead = ({title, description}) => {
  return (
    <div className="content-container">
        <div className="info-box">
            <div className="info-text">
                <h2 className="info-text-h2" >{title}</h2>
                <p className="info-text-p">{description} </p>
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
                height={300} 
                width={400} 
                />
            </div>
        </div>
    </div>
  );
};

export default ReviewHead;
