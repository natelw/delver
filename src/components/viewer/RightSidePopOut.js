import React from 'react';

function RightSidePopOut({players, monsterArr}){
  return(
    <section>
      <div className="right-slider">
        {players.map((player,i) =>
          <p key={'player' + i}>{player.name} {player.initiative}</p>)}
        {monsterArr.map((monster,i) =>
          <p key={'monster' + i}>{monster}</p>)}
      </div>
    </section>
  );


}
export default RightSidePopOut;
