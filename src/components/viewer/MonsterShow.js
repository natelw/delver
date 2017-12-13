import React from 'react';

const MonsterShow = ({ monster, handleAddMonsterClick }) => {
  return (
    <div>
      <a href="#" onClick={handleAddMonsterClick}>Add Monster</a>

      <h1>{monster.name}</h1>
      {monster.actions && monster.actions.map((action,i) =>
        <p key={'actmonst' + i}>{action.desc}</p>)}

    </div>
  );
};

export default MonsterShow;
