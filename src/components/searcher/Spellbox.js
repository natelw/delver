
import React from 'react';

const Spellbox = ({ name, level }) => {
  return (

    <div className="databox-single"><div className="single-text">{name}</div>
      <div className="single-level">{level}</div></div>
  );
};

export default Spellbox;
