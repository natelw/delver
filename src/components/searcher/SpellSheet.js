
import React from 'react';

const SpellSheet = (spells) => {
  return (
    <section>
      <div className="spell-sheet" id="{spells.id}">
        <h3>{spells.name}</h3>
        <h3>{spells.level}</h3>
        {spells.desc.map(desc=> <p key={spells.id}>{desc}</p>)}
      </div>
    </section>
  );
};

export default SpellSheet;
