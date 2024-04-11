import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Onboarding/TrainingComponentBox.css'

const TrainingComponentBox = ({ data, setCurrentModule, index }) => {
  const handleClick = () => {
    setCurrentModule(data.title);
  }

  return (
    <div className='box' >
      <Link className="Link" onClick={handleClick} to={`/training/${index}`}><img src={data.imageUrl} alt={data.title} /></Link>
      <div className="title">{data.title}</div>
    </div>
  );
};

export default TrainingComponentBox;
