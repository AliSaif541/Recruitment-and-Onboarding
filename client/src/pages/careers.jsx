import { useState, useEffect } from 'react';
import axios from 'axios';

function Careers() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs()
    }, []);

    const getJobs = async (e) => {
        const url = "http://localhost:9000/api/job";
        const response = await axios.get(url);
        console.log(response.data);
    }

  return (
    <div>
      <div>Careers</div>
    </div>
  );
}

export default Careers;