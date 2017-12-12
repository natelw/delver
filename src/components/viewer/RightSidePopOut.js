import React from 'react';

function RightSidePopOut({players, monsterArr}){
  return(
    <section>
      <div className="right-slider">
        {players && players.map((player,i) =>
          <p key={'player' + i}>{player.name} {player.initiative}</p>)}
        {monsterArr && monsterArr.map((monster,i) =>
          <p key={'monster' + i}>{monster.name}</p>)}
      </div>
      <h1></h1>
    </section>
  );


}
export default RightSidePopOut;
