import React, { useState } from 'react';
import ApprovalBox from './ApprovalBox'; // Make sure this is pointing to the correct file path

const candidatesData = [
    { id: 1, name: 'Jhon Doe', role: 'Data Analyst', location: 'California, USA', salary: '$3600/Month' },
    { id: 2, name: 'Jane Smith', role: 'Software Developer', location: 'New York, USA', salary: '$4500/Month' },
    { id: 3, name: 'Emma Jones', role: 'Product Manager', location: 'Texas, USA', salary: '$5000/Month' },
    { id: 4, name: 'Jack Brown', role: 'UI/UX Designer', location: 'Florida, USA', salary: '$3800/Month' }
  // ... add other candidate objects here
];

const ApproveCandidatePage = () => {
  const [candidates, setCandidates] = useState(candidatesData);

  const handleApprove = (candidateId) => {
    console.log(`Approved candidate with ID: ${candidateId}`);
    // Implement the approve logic here
    // For example, you might want to filter out the approved candidate:
    // setCandidates(candidates.filter(candidate => candidate.id !== candidateId));
  };

  const handleReject = (candidateId) => {
    console.log(`Rejected candidate with ID: ${candidateId}`);
    // Implement the reject logic here
    // For example, you might want to filter out the rejected candidate:
    // setCandidates(candidates.filter(candidate => candidate.id !== candidateId));
  };

  return (
    <div className="approve-candidate-page">
      <h1 className="page-title">Approve Candidates</h1>
      <div className="candidates-list"> {/* This container should stack its children */}
        {candidates.map(candidate => (
          <ApprovalBox
            key={candidate.id}
            candidate={candidate}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ))}
      </div>
    </div>
  );
};

export default ApproveCandidatePage;
