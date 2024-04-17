
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
import OnboardingDashboard from './pages/Onboarding/OnboardingDashboard';
import { useUser } from './Controllers/UserContext';

const firebaseConfig = { 
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
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
  const [user, setUser]  = useState(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : [];
  });

  // const { user } = useUser();
  // console.log("user: ", user);
  
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
  
  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
    console.log("user: ", user);
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        {!user && <Route path="/postjob" element={<Login />} />}
        {!user && <Route path="/hrjob/:id" element={<Login />} />}
        {!user && <Route path="/user/:id" element={<Login />} />}
        {!user && <Route path="/hr" element={<Login />} />}
        {!user && <Route path="/interview" element={<Login />} />}
        {!user && <Route path="/approve-candidates" element={<Login />} />}
        {!user && <Route path="/view-feedback" element={<Login />} />}
        {!user && <Route path="/upload-video" element={<Login />} />}
        {!user && <Route path="/hr-onboarding" element={<Login />} />}
        {!user && <Route path="/onboarding" element={<Login />} />}

        {user && user.role !== "HR" && <Route path="/postjob" element={<Login />} />}
        {user && user.role !== "HR" && <Route path="/hrjob/:id" element={<Login />} />}
        {user && user.role !== "HR" && <Route path="/user/:id" element={<Login />} />}
        {user && user.role !== "HR" && <Route path="/hr" element={<Login />} />}
        {user && user.role !== "HR" && <Route path="/interview" element={<Login />} />}
        {user && user.role !== "HR" && <Route path="/approve-candidates" element={<Login />} />}
        {user && user.role !== "HR" && <Route path="/view-feedback" element={<Login />} />}
        {user && user.role !== "HR" && <Route path="/upload-video" element={<Login />} />}
        {user && user.role !== "HR" && <Route path="/hr-onboarding" element={<Login />} />}

        {!user && <Route path="/chatroom" element={<Login />} />}
        {!user && <Route path="/training-modules" element={<Login />} />}
        {!user && <Route path="/training/:id" element={<Login />} />}
        {!user && <Route path="/video/:id" element={<Login />} />}
        {!user && <Route path="/leave-feedback" element={<Login />} />}
        {!user && <Route path="/onboarding" element={<Login />} />}

        {/* Routes for Job Applicant Side */}
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<CareersPage setCurrentJob={setCurrentJob} />} />
        <Route path='/job/:id' element={<JobDescription currentJob={currentJob} />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* Routes for HR Job Side */}
        <Route path='postjob' element={<PostJob />} />
        <Route path="/hr" element={<HRDashboard setCurrentJobPosting={setCurrentJobPosting} setCurrentApplicant={setCurrentApplicant} />} />
        <Route path='/hrjob/:id' element={<ApplicantsList currentJobPosting={currentJobPosting} setCurrentApplicant={setCurrentApplicant} />} />
        <Route path='/user/:id' element={<UserProfile currentApplicant={currentApplicant} />} />
        <Route path='interview' element={<Interview currentApplicant={currentApplicant} currentJobPosting={currentJobPosting} />} />
        
        {/* Routes for HR Onboarding Side */}
        <Route path="/hr-onboarding" element={<HRIntroPage />} />
        <Route path="/approve-candidates" element={<HRApproval />} />
        <Route path="/upload-video" element={<UploadVideo />} />
        <Route path="/view-feedback" element={<FeedbackView />} />
        <Route path="/chatroom" element={<ChatRoom user={user} />} />
        
        {/* Routes for Employee Onboarding Side */}
        <Route path="/onboarding" element={<OnboardingDashboard />} />
        <Route path="/training-modules" element={<TrainingModules setCurrentModule={setCurrentModule} />} />
        <Route path="/video/:id" element={<PlayVideo currentVideo={currentVideo} />} />
        <Route path="/training/:id" element={<TrainingVideos currentModule={currentModule} setCurrentVideo={setCurrentVideo} />} />
        <Route path="/leave-feedback" element={<LeaveFeedback user={user} />} />
        
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
