import React from 'react';
import { Link } from 'react-router-dom';
import './HRIntroPage.css'; // Ensure this CSS file is created with styles

function HRIntroPage() {
  return (
    <div className="hr-intro-container">
      <h1>Welcome to the HR Platform</h1>
      <p>This platform allows you to manage company resources, view feedback, communicate in chatrooms, approve HR tasks, and more.</p>

      <div className="feature">
        <div className="feature-text">
          <h2>View Feedback</h2>
          <p>See what others are saying about their experiences. This can help you gauge employee satisfaction and identify areas for improvement.</p>
          <Link to="/feedback" className="feature-link">Go to Feedback Page</Link>
        </div>
        <div className="feature-image">
          {/* Placeholder image for View Feedback */}
          <img src="/path-to-your-feedback-image.jpg" alt="Feedback" />
        </div>
      </div>

      <div className="feature">
        <div className="feature-text">
          <h2>Training Modules</h2>
          <p>If you want to upload or manage training modules, you can do so easily. Share knowledge and grow the team's skills.</p>
          <Link to="/upload-video" className="feature-link">Upload Training Material</Link>
        </div>
        <div className="feature-image">
          {/* Placeholder image for Training Modules */}
          <img src="/path-to-your-training-modules-image.jpg" alt="Training" />
        </div>
      </div>

      <div className="feature">
        <div className="feature-text">
          <h2>Chatroom</h2>
          <p>Engage in real-time conversations with team members. A great way to stay connected and discuss important topics.</p>
          <Link to="/chatroom" className="feature-link">Join the Chatroom</Link>
        </div>
        <div className="feature-image">
          {/* Placeholder image for Chatroom */}
          <img src="/path-to-your-chatroom-image.jpg" alt="Chatroom" />
        </div>
      </div>

      <div className="feature">
        <div className="feature-text">
          <h2>HR Approval</h2>
          <p>Review and approve various HR-related tasks. Ensure everything is up to the company standards and regulations.</p>
          <Link to="/hr-approval" className="feature-link">Go to HR Approvals</Link>
        </div>
        <div className="feature-image">
          {/* Placeholder image for HR Approval */}
          <img src="/path-to-your-hr-approval-image.jpg" alt="HR Approval" />
        </div>
      </div>

    </div>
  );
}

export default HRIntroPage;
