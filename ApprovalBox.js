import React from 'react';
import './ApprovalBox.css'; // Make sure to create this CSS file and import it here

const ApprovalBox = ({ candidate, onApprove, onReject }) => {
  return (
    <div className="approval-box">
      <div className="candidate-info">
        <div className="candidate-details">
          <h2 className="candidate-name">{candidate.name}</h2>
          <p className="candidate-role">{candidate.role}</p>
          <p className="candidate-location">{candidate.location}</p>
        </div>
        
      </div>
      <div className="candidate-actions">
        <button className="btn-approve" onClick={() => onApprove(candidate.id)}>Approve</button>
        <button className="btn-reject" onClick={() => onReject(candidate.id)}>Reject</button>
        <div className="candidate-salary">{candidate.salary}</div>
      </div>
    </div>
  );
};

export default ApprovalBox;
