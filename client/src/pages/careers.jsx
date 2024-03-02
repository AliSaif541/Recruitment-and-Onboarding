import { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from '../components/jobCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Careers({ setCurrentJob }) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs()
    }, []);

    const getJobs = async (e) => {
        const url = "http://localhost:9000/api/job";
        const response = await axios.get(url);
        setJobs(response.data);
        console.log(response.data);
    }

  return (
    <div>
      <Header />
      <div className='Intro-container'>
        <img className='Intro-Img' src="" />
        <div className='Intro-text'>
          <h1>Join our team at Devsinc</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi. 
          </p>
          <button>Learn More</button>
        </div>
      </div>

      <div className='Job-Postings-Container'>
        <h2>Latest Openings</h2>
        <div className='Job-Blocks'>
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} index={index} setCurrentJob={setCurrentJob} />
          ))}
        </div>
      </div>

      <div className='ContactUs-Container'>
        <div className='ConatctUS-Text'>
          <h2>Contact</h2>
          <h2>Looking for a new opportunity?</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate</p>
        </div>
        <div className='ContactUS-Form'>
          <form action="">
            <input className="user-inp" type="text" placeholder="Full Name" name='fullName' />
            <input className="user-inp" type="text" placeholder="Email" name='email' />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Careers;