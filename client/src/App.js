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

function App() {
  const [currentJob, setCurrentJob] = useState(() => {
    const storedJob = sessionStorage.getItem('currentJob');
    return storedJob ? JSON.parse(storedJob) : [];
  });

  const token = localStorage.getItem("token");

  let user = null;

  if (token) {
    user = jwtDecode(token);
  }

  if (user) {
    console.log(user);
  }
  
  useEffect(() => {
    sessionStorage.setItem('currentJob', JSON.stringify(currentJob));
  }, [currentJob]);

  return (
    <BrowserRouter>
      <Routes>
        {!user && <Route path="/postjob" element={<Login />} />}
        {!user && <Route path="/hrjob/:id" element={<Login />} />}
        {!user && <Route path="/hr" element={<Login />} />}
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<CareersPage setCurrentJob={setCurrentJob} />} />
        <Route path='/job/:id' element={<JobDescription currentJob={currentJob} />} />
        <Route path='/hrjob/:id' element={<ApplicantsList />} />
        <Route path='postjob' element={<PostJob />} />
        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postjob" element={<Navigate replace to="/login" />} />
        <Route path="/hr" element={<Navigate replace to="/login" />} />
        <Route path="/hrjob/:id" element={<Navigate replace to="/login" />} />
		  </Routes>
    </BrowserRouter>
  );
}

export default App;
