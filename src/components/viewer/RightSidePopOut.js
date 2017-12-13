import React from 'react';

function RightSidePopOut({
  players,
  monsterArr,
  handleSearchClick,
  handleSaveBattle,
  handleActiveReset,
  handleRollInitDice,
  monsterInit,
  handleRollPlayerDice

}){
  return(
    <section>
      <button onClick={handleSaveBattle} >Save Battle</button>
      <button onClick={handleActiveReset} >Reset Battle</button>
      <button onClick={handleRollInitDice}>Roll</button>
      <div className="right-slider">
        {players && players.map((player,i) =>
          <p key={'player' + i}>{player.name} <button onClick={handleRollPlayerDice}>Roll</button></p>)}
        {monsterArr && monsterArr.map((monster,i) =>
          <div className="databox-single" key={'monster' + i} onClick={handleSearchClick.bind(this, monster.id)}><div className="single-text">{monster.name}</div><div className="monster-init-box">{monsterInit}</div></div>)}

        <p>{monsterInit}</p>

      </div>
    </section>
  );


}
export default RightSidePopOut;
