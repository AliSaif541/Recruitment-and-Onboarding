import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../images/animation.json'
import '../../styles/Onboarding/TrainingComponentHead.css'

const TrainingComponentHead = () => {
  return (
    <div className="content-container">
        <div className="info-box">
            <div className="info-text">
                <h2 className="info-text-h2" >Training Modules </h2>
                <p className="info-text-p">Welcome to our comprehensive training modules designed to kickstart your journey with us! Dive into our diverse range of modules covering everything from company culture and policies to job-specific tasks and industry insights. </p>
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
  );
};

export default TrainingComponentHead;
