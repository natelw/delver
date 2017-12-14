import React from 'react';

const SpellShow = ({ spell }) => {
  return (
    <div>
      <h1>{spell.name}</h1><h3>{'Circle: ' + spell.level}</h3>

      {spell.desc && spell.desc.map((desc,i) =>
        <p key={'spelldesc' + i}>{desc}</p>)}
      {spell.higher_level && spell.higher_level.map((stuff,i) =>
        <p key={'hilvl' + i}>{stuff}</p>)}
      {spell.components && spell.components.map((component,i) =>
        <p key={'compo' + i}>{component}</p>)}
      <p>{spell.material}</p>
      <div className="spell-stats-box">
        <p>{'ritual: ' + spell.ritual}</p>
        <p>{'duration: ' + spell.duration}</p>
        <p>{'casting time: ' + spell.casting_time}</p>
        <p>{'spell range: ' + spell.range}</p>
      </div>
    </div>
  );
};

export default SpellShow;
