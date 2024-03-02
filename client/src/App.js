import './styling/App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Careers from './pages/careers'
import JobDescription from './pages/jobDescription';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/careers" element={<Careers />} />
        <Route path='/job/:id' element={<JobDescription />} />
		  </Routes>
    </BrowserRouter>
  );
}

export default App;
