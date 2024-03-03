import { useState, useEffect } from 'react';
import axios from 'axios';

function PostAJob() {
    const [jobPosting, setJobPosting] = useState({ 
        name: '', 
        company: '',
        salary: '', 
        job_type: '', 
        location: '' ,
        description: '',
    });

    const handleInputChange = (e) => {
        setJobPosting({ ...jobPosting, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:9000/api/job/jobPosting', jobPosting);
          console.log('Job Posted successfully');
        } catch (error) {
          console.error('Error uploading data:', error);
        }
    }

    return (
      <div>
        <div className='Form-Container'>
            <form onSubmit={handleSubmit}>
                <input className="user-inp" type="text" placeholder="Name" name='name' onChange={handleInputChange} required />
                <input className="user-inp" type="text" placeholder="Company" name='company' onChange={handleInputChange} required />
                <input className="user-inp" type="text" placeholder="Salary" name='salary' onChange={handleInputChange} required />
                <input className="user-inp" type="text" placeholder="Job Type" name='job_type' onChange={handleInputChange} required />
                <input className="user-inp" type="text" placeholder="Location" name='location' onChange={handleInputChange} required />
                <input className="user-inp" type="text" placeholder="Description" name='description' onChange={handleInputChange} required />
                <button type="submit">Send Application</button>
            </form>
        </div>
      </div>
    );
}
  
  export default PostAJob;