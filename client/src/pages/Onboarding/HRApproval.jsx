import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ApprovalBox from '../../components/Onboarding/ApprovalBox';
import axios from 'axios';
import HRHeader from '../../components/HRHeader';

const HRApproval = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
        try {
          const response = await axios.get('https://recruitment-and-onboarding-backend.vercel.app/api/hr/unverified');
          setCandidates(response.data.data);
        } catch (error) {
          console.error('Error fetching candidates:', error);
        }
    };

    fetchCandidates();
  }, []);

  const handleApprove = async (candidateId) => {
    try {
      await axios.post('https://recruitment-and-onboarding-backend.vercel.app/api/hr/update-verification', { _id: candidateId, verified: 1 });
      setCandidates(candidates.filter(candidate => candidate._id !== candidateId)); 
    } catch (error) {
      console.error('Error approving candidate:', error);
    }
  };

  const handleReject = async (candidateId) => {
    try {
      await axios.post('https://recruitment-and-onboarding-backend.vercel.app/api/hr/update-verification', { _id: candidateId, verified: -1 }); 
      setCandidates(candidates.filter(candidate => candidate._id !== candidateId));
    } catch (error) {
      console.error('Error rejecting candidate:', error);
    }
  };

  return (
    <div>
      <HRHeader />
      <div className="approve-candidate-page">
        <h1 className="page-title-approval-box">Approve Candidates</h1>
        <div className="candidates-list-approval-box">
          {candidates.map(candidate => (
            <ApprovalBox
              key={candidate._id}
              candidate={candidate}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HRApproval;
