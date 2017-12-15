import React from 'react';

const SpellShow = ({ spell }) => {
  return (
    <div>
      <h1>{spell.name}</h1>
      <hr/>

      <h3>{'Circle: ' + spell.level}</h3>

      {spell.desc && spell.desc.map((desc,i) =>
        <p key={'spelldesc' + i}>{desc}</p>)}
      {spell.higher_level && spell.higher_level.map((stuff,i) =>
        <p key={'hilvl' + i}>{stuff}</p>)}

      <div className="spell-stats-box">
        <div className="spell-single-stats">{'ritual: ' + spell.ritual}</div>
        <div className="spell-single-stats">{'duration: ' + spell.duration}</div>
        <div className="spell-single-stats">{'casting time: ' + spell.casting_time}</div>
        <div className="spell-single-stats">{'spell range: ' + spell.range}</div>
      </div>
      <hr/>
      <p>{spell.material}</p>
      {spell.components && spell.components.map((component,i) =>
        <div className="compo-box" key={'compo' + i}>{component}</div>)}

    </div>
  );
};

export default SpellShow;
