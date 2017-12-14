import React from 'react';

function RightSidePopOut({
  players,
  monsterArr,
  handleSearchClick,
  handleSaveBattle,
  handleActiveReset,
  handleRollInitDice,
  handleRollPlayerDice,
  campaign

}){
  return(
    <section>
      <h3>Favourites</h3>
      <button onClick={handleActiveReset} >Reset</button>
      <div className="right-slider">

        {players && players.map((player,i) =>
          <p key={'player' + i}>{player.name} <button onClick={handleRollPlayerDice}>Roll</button></p>)}

        {monsterArr && monsterArr.map((monster,i) =>
          <div className="databox-single" key={'monster' + i} onClick={handleSearchClick.bind(this, monster.id)}><div className="single-text">{monster.name}</div></div>)}
        {campaign.monsters && campaign.monsters.map((monster,i) =>
          <div className="databox-single" key={'monster' + i} onClick={handleSearchClick.bind(this, monster.id)}><div className="single-text">{monster.name}</div></div>)}
      </div>
    </section>
  );


}
export default RightSidePopOut;
