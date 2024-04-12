import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ApprovalBox from '../../components/Onboarding/ApprovalBox';
import axios from 'axios'; // Import Axios for making HTTP requests

const HRApproval = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
        try {
          const response = await axios.get('http://localhost:9000/api/hr/unverified'); // Make a GET request to fetch unverified candidates
          setCandidates(response.data.data); // Update state with fetched candidates
        } catch (error) {
          console.error('Error fetching candidates:', error);
        }
    };

    fetchCandidates();
  }, []);

  const handleApprove = async (candidateId) => {
    try {
      await axios.post('http://localhost:9000/api/hr/update-verification', { _id: candidateId, verified: 1 }); // Make a POST request to update verification status
      setCandidates(candidates.filter(candidate => candidate._id !== candidateId)); // Update state to remove the approved candidate
    } catch (error) {
      console.error('Error approving candidate:', error);
    }
  };

  const handleReject = async (candidateId) => {
    try {
      await axios.post('http://localhost:9000/api/hr/update-verification', { _id: candidateId, verified: -1 }); // Make a POST request to update verification status
      setCandidates(candidates.filter(candidate => candidate._id !== candidateId)); // Update state to remove the rejected candidate
    } catch (error) {
      console.error('Error rejecting candidate:', error);
    }
  };

  return (
    <div>
      <Header />
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
