import React from 'react';
import '../../styles/Onboarding/ApprovalBox.css';

const ApprovalBox = ({ candidate, onApprove, onReject }) => {
  return (
    <div className="approval-box">
      <div className="candidate-info-approval-box">
        <div className="candidate-details-approval-box">
          <h2 className="candidate-name-approval-box">{candidate.name}</h2>
          <p className="candidate-role-approval-box">{candidate.role}</p>
          <p className="candidate-location-approval-box">{candidate.email}</p>
        </div>
      </div>
      <div className="candidate-actions-approval-box">
        <button className="btn-approve-approval-box" onClick={() => onApprove(candidate._id)}>Approve</button>
        <button className="btn-reject-approval-box" onClick={() => onReject(candidate._id)}>Reject</button>
      </div>
    </div>
  );
};

export default ApprovalBox;
