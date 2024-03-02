import { useState, useEffect } from 'react';
import axios from 'axios';

function JobCard(job) {
  return (
    <div>
      <div>{job.name}</div>
      <div>{job.job_type}</div>
      <div>{job.description}</div>
      <button>Apply Now</button>
    </div>
  );
}

export default JobCard;