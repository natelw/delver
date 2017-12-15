import React from 'react';

const FeatureShow = ({ feature }) => {
  return (
    <div>
      <h1>{feature.name}</h1>
      <hr/>
      <h3>{'Level: ' + feature.level}</h3>
      {feature.desc && feature.desc.map((desc,i) =>
        <p key={'featuredesc' + i}>{desc}</p>)}
    </div>
  );
};

export default FeatureShow;
