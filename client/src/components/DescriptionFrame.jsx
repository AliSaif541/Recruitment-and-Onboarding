import React from 'react';
import "../styles/DescriptionFrame.css";

const DescriptionFrame = ({currentJob}) => {
  return (
    <div className='DescriptionFrame'>
      <div className='SideBar-JD'>
        <div className='SideBar-Block'>
          <h3 className='SideBar-Div-Title'>Location</h3>
          <div className='SideBar-Div-Data'>{currentJob.location}</div>
        </div>
        <div className='SideBar-Block'>
          <h3 className='SideBar-Div-Title'>Salary</h3>
          <div className='SideBar-Div-Data'>{currentJob.salary}</div>
        </div>
        <div className='SideBar-Block'>
          <h3 className='SideBar-Div-Title'>Job Type</h3>
          <div className='SideBar-Div-Data'>{currentJob.job_type}</div>
        </div>
      </div>
      <div className='Main-JD'>
        <h3 clas>Description</h3>
        <div className='Main-Name'>{currentJob.name}</div>
        <div className='Main-Location-Type'>{currentJob.company} - {currentJob.location} - {currentJob.job_type}</div>
        <div className='Main-Description'>{currentJob.description}</div>
      </div>
    </div>
    
  );
};

export default DescriptionFrame;
