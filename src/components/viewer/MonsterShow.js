import React from 'react';

const MonsterShow = ({ monster }) => {
  return (
    <div>
      <h1>{monster.name}</h1>
      {monster.actions && monster.actions.map((action,i) =>
        <p key={'actmonst' + i}>{action.desc}</p>)}

    </div>
  );
};

export default MonsterShow;
