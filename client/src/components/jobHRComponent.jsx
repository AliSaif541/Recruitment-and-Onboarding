

function JobHRComponent({ _id, name, company, salary, location, job_type, description }) {
    
    return (
      <div>
        <div>{name}</div>
        <div>{company}</div>
        <div>{job_type}</div>
        <div>{salary}</div>
      </div>
    );
}

export default JobHRComponent;
  