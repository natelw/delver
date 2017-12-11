
import React from 'react';

const FeatureBox = ({ name, level }) => {
  return (

    <div className="box-single"><div className="single-text">{name}</div>
      <div className="single-level">{level}</div></div>
  );
};

export default FeatureBox;
