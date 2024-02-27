import { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from '../components/jobCard';

function Careers() {
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
      <div>Careers</div>
      {jobs.map(job => (
          <JobCard key={job} />
        ))}
      <JobCard />
    </div>
  );
}

export default Careers;