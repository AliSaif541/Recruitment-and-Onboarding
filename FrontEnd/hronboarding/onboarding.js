import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import '../styles/ContactUs.css';
import animation from './Animation-hr.json'
import approval from './Animation-verify.json';
import upload from './Animation-UploadVideo.json';
import feedback from './Animation-Review-2.json'
import chatroom from './Animation-ChatRoom.json';
import HRHeader from './Header';
import timeline_image from '../logos/timeline.jpg';
import TrainingComponentHead from './TrainingComponentHead';

function ContactUs() {
    const description = "Our comprehensive HR platform is designed to facilitate a streamlined workflow. Our comprehensive HR platform is designed to facilitate a streamlined workflow.";
    return (
        <div>
            <HRHeader />
            <TrainingComponentHead title='Welcome to the HR Platform' description={description} animation={animation} />
            <div className="title-container">
                <h1 className="title">Your Title Here</h1>
                <p className="sub-text">Your subtext here</p>
            </div>
            <div className="image-container">
                <img src={timeline_image} alt="Timeline" />
            </div>
            <div className="title-container">
                <h1 className="title">Your Title Here</h1>
            </div>
            <div className="hr-intro-container">
                <section className="feature-section" data-aos="fade-up">
                    <div className="feature-content">
                        <h2>View Feedback</h2>
                        <p>Listening to employee feedback is crucial for building a positive work environment...</p>
                        <div className="feature-link">Visit Feedback Page</div>
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
                        <div className="feature-link">Upload Training Material</div>
                    </div>
                </section>

                <section className="feature-section" data-aos="fade-up">
                    <div className="feature-content">
                        <h2>Chatroom</h2>
                        <p>Our integrated chatroom fosters real-time communication and collaboration...</p>
                        <div className="feature-link">Join the Chatroom</div>
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
                            height={250}
                            width={350}
                        />
                    </div>
                    <div className="feature-content-2">
                        <h2>HR Approval</h2>
                        <p>Navigate the complexities of HR tasks with our streamlined approval system...</p>
                        <div className="feature-link">Go to HR Approvals</div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default ContactUs;
