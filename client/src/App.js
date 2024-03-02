import './styling/App.css';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Careers from './pages/careers'
import JobDescription from './pages/jobDescription';
import Home from './pages/Home';

function App() {
  const [currentJob, setCurrentJob] = useState([]);
  console.log("currentJob: ", currentJob)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers setCurrentJob={setCurrentJob} />} />
        <Route path='/job/:id' element={<JobDescription currentJob={currentJob} />} />
		  </Routes>
    </BrowserRouter>
  );
}

export default App;
