import './styles/App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Careers from './pages/careers'
import JobDescription from './pages/jobDescription';
import Home from './pages/Home';
import CareersPage from './pages/Careerspage';

function App() {
  const [currentJob, setCurrentJob] = useState(() => {
    const storedJob = sessionStorage.getItem('currentJob');
    return storedJob ? JSON.parse(storedJob) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('currentJob', JSON.stringify(currentJob));
  }, [currentJob]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/careers" element={<Careers setCurrentJob={setCurrentJob} />} /> */}
        <Route path="/careers" element={<CareersPage setCurrentJob={setCurrentJob} />} />
        <Route path='/job/:id' element={<JobDescription currentJob={currentJob} />} />
		  </Routes>
    </BrowserRouter>
  );
}

export default App;
