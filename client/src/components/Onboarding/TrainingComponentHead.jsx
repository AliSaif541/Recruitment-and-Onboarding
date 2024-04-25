import React from 'react';
import Lottie from 'react-lottie';
import '../../styles/Onboarding/TrainingComponentHead.css'

const TrainingComponentHead = ({title, description, animation}) => {
  return (
    <div className="content-container">
        <div className="info-box">
            <div className="info-text">
                <h2 className="info-text-h2" >{title}</h2>
                <p className="info-text-p">{description} </p>
            </div>
            <div className="animation-container-head">
                <Lottie
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: animation,
                    rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                // height={300}
                // width={400}
                />
            </div>
        </div>
    </div>
  );
};

export default TrainingComponentHead;
