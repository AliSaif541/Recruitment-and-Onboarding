import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import '../../styles/Onboarding/HRIntroPage.css';
// import animation from '../../images/Animation-hr.json'
import approval from '../../images/Animation-verify.json';
import upload from '../../images/Animation-UploadVideo.json';
import feedback from '../../images/Animation-Review-2.json'
import chatroom from '../../images/Animation-ChatRoom.json';
import timeline_image from '../../images/timeline_image.jpg';
import animation from '../../images/Animation-Dashboard.json'
import HRHeader from '../../components/HRHeader';
import TrainingComponentHead from '../../components/Onboarding/TrainingComponentHead';
import Footer from '../../components/Footer';

function OnboardingDashboard({ user, setUser}) {
    const description = "Our comprehensive HR platform is designed to facilitate a streamlined workflow. Our comprehensive HR platform is designed to facilitate a streamlined workflow.";

    return (
        <div>
            <HRHeader user={user} setUser={setUser} />
            <TrainingComponentHead title='Welcome to the Devsinc Onboarding Platform' description={description} animation={animation} />
            
            <div className="dashboard-title-container">
                <h1 className="dashboard-title">Upcoming Timeline</h1>
                <p className="dashboard-subtext">Gear up for a week full of fun tasks! We have planned the following weeks very carefully so that new employees like you can get the fill experience and get to know the company and your fellow colleague well.</p>
            </div>
            <div className="dashboard-image-container">
                <img src={timeline_image} alt="Timeline" />
            </div>
            <div className="dashboard-title-container">
                <h1 className="dashboard-title">Our Diverse Onboarding Platform</h1>
                <p className="dashboard-subtext">Our comprehensive HR platform is designed to facilitate a streamlined workflow. Our comprehensive HR platform is designed to facilitate a streamlined workflow.</p>
            </div>


            <div className="hr-intro-container">
                <section className="feature-section" data-aos="fade-up">
                    <div className="feature-content">
                        <h2>Leave Feedback</h2>
                        <p>Listening to employee feedback is crucial for building a positive work environment...</p>
                        <Link to="/leave-feedback" className="feature-link">Visit Feedback Page</Link>
                    </div>
                    <div className="feature-image">
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: feedback,
                                rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                                }
                            }}
                            height={250}
                            width={350}
                        />
                    </div>
                </section>

                <section className="feature-section" data-aos="fade-up">
                    <div className="feature-image-2">
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: upload,
                                rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                                }
                            }}
                            height={250}
                            width={350}
                        />
                    </div>
                    <div className="feature-content-2">
                        <h2>Training Modules</h2>
                        <p>Empower your team with knowledge through our dynamic training modules...</p>
                        <Link to="/upload-video" className="feature-link">Upload Training Material</Link>
                    </div>
                </section>

                <section className="feature-section" data-aos="fade-up">
                    <div className="feature-content">
                        <h2>Chatroom</h2>
                        <p>Our integrated chatroom fosters real-time communication and collaboration...</p>
                        <Link to="/chatroom" className="feature-link">Join the Chatroom</Link>
                    </div>
                    <div className="feature-image">
                        <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: chatroom,
                                    rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }}
                                height={250}
                                width={350}
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default OnboardingDashboard;
