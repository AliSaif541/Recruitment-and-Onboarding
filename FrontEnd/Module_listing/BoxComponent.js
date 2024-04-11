import React from 'react';

const BoxComponent = ({ data }) => {
  return (
    <div className="box">
      <img src={data.imageUrl} alt={data.title} />
      <div className="title">{data.title}</div>
    </div>
  );
};

export default BoxComponent;
