import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Careers from './pages/careers'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/careers" element={<Careers />} />
		  </Routes>
    </BrowserRouter>
  );
}

export default App;
