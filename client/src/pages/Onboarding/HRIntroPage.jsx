import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import '../../styles/Onboarding/HRIntroPage.css';
import animation from '../../images/Animation-hr.json'
import approval from '../../images/Animation-verify.json';
import upload from '../../images/Animation-UploadVideo.json';
import feedback from '../../images/Animation-Review-2.json'
import chatroom from '../../images/Animation-ChatRoom.json';
import HRHeader from '../../components/HRHeader';
import TrainingComponentHead from '../../components/Onboarding/TrainingComponentHead';
import Footer from '../../components/Footer';

function HRIntroPage({ user, setUser}) {
    const description = "Our comprehensive HR platform is designed to facilitate a streamlined workflow. Our comprehensive HR platform is designed to facilitate a streamlined workflow.";

    return (
        <div>
            <HRHeader user={user} setUser={setUser} />
            <TrainingComponentHead title='Welcome to the HR Platform' description={description} animation={animation} />

            <div className="hr-intro-container">
                <section className="feature-section" data-aos="fade-up">
                    <div className="feature-content">
                        <h2>View Feedback</h2>
                        <p>Listening to employee feedback is crucial for building a positive work environment...</p>
                        <Link to="/view-feedback" className="feature-link">Visit Feedback Page</Link>
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
                            className="animation-container-real"
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
                            className="animation-container-real"
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
                                className="animation-container-real"
                        />
                    </div>
                </section>

                <section className="feature-section" data-aos="fade-up">
                    <div className="feature-image-2">
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: approval,
                                rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                                }
                            }}
                            className="animation-container-real"
                        />
                    </div>
                    <div className="feature-content-2">
                        <h2>HR Approval</h2>
                        <p>Navigate the complexities of HR tasks with our streamlined approval system...</p>
                        <Link to="/approve-candidates" className="feature-link">Go to HR Approvals</Link>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    );
}

export default HRIntroPage;
