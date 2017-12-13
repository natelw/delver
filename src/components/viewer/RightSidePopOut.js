import React from 'react';

function RightSidePopOut({players, monsterArr, handleSearchClick, handleSaveBattle}){
  return(
    <section>
      <div className="right-slider">
        {players && players.map((player,i) =>
          <p key={'player' + i}>{player.name} {player.initiative}</p>)}
        {monsterArr && monsterArr.map((monster,i) =>
          <div className="databox-single" key={'monster' + i} onClick={handleSearchClick.bind(this, monster.id)}><div className="single-text">{monster.name}</div></div>)}
        <button onClick={handleSaveBattle} >Save Battle</button>

      </div>
    </section>
  );


}
export default RightSidePopOut;
