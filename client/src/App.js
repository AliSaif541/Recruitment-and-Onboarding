
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
import ChatRoom from './pages/Onboarding/ChatRoom';
import TrainingVideos from './pages/Onboarding/TrainingVideos';
import UploadVideo from './pages/Onboarding/UploadVideo';
import firebase from "firebase/compat/app";
import PlayVideo from './pages/Onboarding/PlayVideo';
import TrainingModules from './pages/Onboarding/TrainingModules';
import LeaveFeedback from './pages/Onboarding/LeaveFeedback';
import HRApproval from './pages/Onboarding/HRApproval';
import FeedbackView from './pages/Onboarding/FeedbackView';
import ErrorPage from './components/ErrorPage';
import HRHeader from './components/HRHeader';
import HRIntroPage from './pages/Onboarding/HRIntroPage';

const firebaseConfig = {
  apiKey: "AIzaSyChMXfx7NRyh6yL-6z84E42LEoeP06QJbs",
  authDomain: "recruitment-and-onboardi-222bb.firebaseapp.com",
  projectId: "recruitment-and-onboardi-222bb",
  storageBucket: "recruitment-and-onboardi-222bb.appspot.com",
  messagingSenderId: "212429357606",
  appId: "1:212429357606:web:53f75db4597cafeb689ce7",
  measurementId: "G-1N7VFH9Q6S"
};

firebase.initializeApp(firebaseConfig);

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
  const [currentModule, setCurrentModule] = useState(() => {
    const storedModule = sessionStorage.getItem('currentModule');
    return storedModule ? JSON.parse(storedModule) : null;
  });
  const [currentVideo, setCurrentVideo]  = useState(() => {
    const storedVideo = sessionStorage.getItem('currentVideo');
    return storedVideo ? JSON.parse(storedVideo) : [];
  });

  const token = localStorage.getItem("token");

  let user = null;

  if (token) {
    user = jwtDecode(token);
    // console.log("user: ", user);
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

  useEffect(() => {
    sessionStorage.setItem('currentModule', JSON.stringify(currentModule));
    console.log("currentModule: ", currentModule);
}, [currentModule]);

  useEffect(() => {
    sessionStorage.setItem('currentVideo', JSON.stringify(currentVideo));
    console.log("currentVideo: ", currentVideo);
  }, [currentVideo]);

  return (
    <BrowserRouter>
      <Routes>
        {!user && <Route path="/postjob" element={<Login />} />}
        {!user && <Route path="/hrjob/:id" element={<Login />} />}
        {!user && <Route path="/user/:id" element={<Login />} />}
        {!user && <Route path="/hr" element={<Login />} />}
        {!user && <Route path="/interview" element={<Login />} />}
        {!user && <Route path="/training-modules" element={<Login />} />}
        {!user && <Route path="/approve-candidates" element={<Login />} />}
        {!user && <Route path="/leave-feedback" element={<Login />} />}
        {!user && <Route path="/view-feedback" element={<Login />} />}
        {!user && <Route path="/upload-video" element={<Login />} />}
        {!user && <Route path="/video/:id" element={<Login />} />}
        {!user && <Route path="/training/:id" element={<Login />} />}
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<CareersPage setCurrentJob={setCurrentJob} />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* Routes for HR Side */}
        <Route path='postjob' element={<PostJob />} />
        <Route path="/hr" element={<HRDashboard setCurrentJobPosting={setCurrentJobPosting} setCurrentApplicant={setCurrentApplicant} />} />
        <Route path='interview' element={<Interview currentApplicant={currentApplicant} currentJobPosting={currentJobPosting} />} />
        <Route path='/job/:id' element={<JobDescription currentJob={currentJob} />} />
        <Route path='/hrjob/:id' element={<ApplicantsList currentJobPosting={currentJobPosting} setCurrentApplicant={setCurrentApplicant} />} />
        <Route path='/user/:id' element={<UserProfile currentApplicant={currentApplicant} />} />
        <Route path="/training-modules" element={<TrainingModules setCurrentModule={setCurrentModule} />} />
        <Route path="/video/:id" element={<PlayVideo currentVideo={currentVideo} />} />
        <Route path="/training/:id" element={<TrainingVideos currentModule={currentModule} setCurrentVideo={setCurrentVideo} />} />
        <Route path="/approve-candidates" element={<HRApproval />} />
        <Route path="/upload-video" element={<UploadVideo />} />
        <Route path="/leave-feedback" element={<LeaveFeedback />} />
        <Route path="/view-feedback" element={<FeedbackView />} />
        <Route path="/hr-onboarding" element={<HRIntroPage />} />
        {/* <Route path="/testing" element={<HRIntroPage />} /> */}
        <Route path="/interview" element={<Navigate replace to="/login" />} />
        <Route path="/postjob" element={<Navigate replace to="/login" />} />
        <Route path="/hr" element={<Navigate replace to="/login" />} />
        <Route path="/leave-feedback" element={<Navigate replace to="/login" />} />
        <Route path="/view-feedback" element={<Navigate replace to="/login" />} />
        <Route path="/upload-video" element={<Navigate replace to="/login" />} />
        <Route path="/approve-candidates" element={<Navigate replace to="/login" />} />
        <Route path="/training-modules" element={<Navigate replace to="/login" />} />
        <Route path="/video/:id" element={<Navigate replace to="/login" />} />
        <Route path="/training/:id" element={<Navigate replace to="/login" />} />
        <Route path="/hrjob/:id" element={<Navigate replace to="/login" />} />
        <Route path="/user/:id" element={<Navigate replace to="/login" />} />
        <Route path='*' element={<ErrorPage />} />
		  </Routes>
    </BrowserRouter>
  );
}

export default App;
