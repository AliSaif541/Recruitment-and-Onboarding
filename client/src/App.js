import './styles/App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import JobDescription from './pages/jobDescription';
import Home from './pages/Home';
import CareersPage from './pages/Careerspage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import HRDashboard from './pages/HRDashboard'
import Aboutus from './pages/Aboutus';
import ContactUs from './pages/ContactUs';
import PostJob from './pages/postJob';
import ApplicantsList from './pages/ApplicantsList';
import UserProfile from './pages/UserProfile';
import Interview from './pages/Interview';
import Testing from './pages/Testing';

function App() {
  const [currentJob, setCurrentJob] = useState(() => {
    const storedJob = sessionStorage.getItem('currentJob');
    return storedJob ? JSON.parse(storedJob) : [];
  });

  const [currentJobPosting, setCurrentJobPosting] = useState(() => {
    const storedJobPosting = sessionStorage.getItem('currentJobPosting');
    return storedJobPosting ? JSON.parse(storedJobPosting) : [];
  });

  const [currentApplicant, setCurrentApplicant] = useState(() => {
    const storedApplicant = sessionStorage.getItem('currentApplicant');
    return storedApplicant ? JSON.parse(storedApplicant) : [];
  });

  const token = localStorage.getItem("token");

  let user = null;

  if (token) {
    user = jwtDecode(token);
  }
  
  useEffect(() => {
    sessionStorage.setItem('currentJob', JSON.stringify(currentJob));
  }, [currentJob]);

  useEffect(() => {
    sessionStorage.setItem('currentJobPosting', JSON.stringify(currentJobPosting));
  }, [currentJobPosting]);

  useEffect(() => {
    sessionStorage.setItem('currentApplicant', JSON.stringify(currentApplicant));
    console.log("current: ", currentApplicant);
  }, [currentApplicant]);

  return (
    <BrowserRouter>
      <Routes>
        {!user && <Route path="/postjob" element={<Login />} />}
        {!user && <Route path="/hrjob/:id" element={<Login />} />}
        {!user && <Route path="/user/:id" element={<Login />} />}
        {!user && <Route path="/hr" element={<Login />} />}
        {!user && <Route path="/interview" element={<Login />} />}
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<CareersPage setCurrentJob={setCurrentJob} />} />
        <Route path='/job/:id' element={<JobDescription currentJob={currentJob} />} />
        <Route path='/hrjob/:id' element={<ApplicantsList currentJobPosting={currentJobPosting} setCurrentApplicant={setCurrentApplicant} />} />
        <Route path='/user/:id' element={<UserProfile currentApplicant={currentApplicant} />} />
        <Route path='interview' element={<Interview currentApplicant={currentApplicant} currentJobPosting={currentJobPosting} />} />
        <Route path='postjob' element={<PostJob />} />
        <Route path="/hr" element={<HRDashboard setCurrentJobPosting={setCurrentJobPosting} setCurrentApplicant={setCurrentApplicant} />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/testing" element={<Testing />} /> */}
        <Route path="/interview" element={<Navigate replace to="/login" />} />
        <Route path="/postjob" element={<Navigate replace to="/login" />} />
        <Route path="/hr" element={<Navigate replace to="/login" />} />
        <Route path="/hrjob/:id" element={<Navigate replace to="/login" />} />
        <Route path="/user/:id" element={<Navigate replace to="/login" />} />
		  </Routes>
    </BrowserRouter>
  );
}

export default App;
