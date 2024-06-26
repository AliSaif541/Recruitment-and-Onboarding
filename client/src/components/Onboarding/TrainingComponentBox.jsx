import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Onboarding/TrainingComponentBox.css'

const TrainingComponentBox = ({ _id, name, Description, imageURL, setCurrentModule, index }) => {
  const handleClick = () => {
    setCurrentModule({
      _id,
      name,
      Description,
      imageURL
    });
  }

  return (
    <div className='box-Training' >
      <Link className="Link" onClick={handleClick} to={`/training/${index}`}><img src={imageURL} alt={name} /></Link>
      <div className="title">{name}</div>
    </div>
  );
};

export default TrainingComponentBox;
