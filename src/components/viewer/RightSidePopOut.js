import React from 'react';

function RightSidePopOut({
  players,
  monsterArr,
  handleSearchClick,
  handleActiveReset,
  handleRollPlayerDice,
  campaign

}){
  return(
    <section>
      <div className="right-top-title">
        <div className="favourites-title">Favourites <i className="fa fa-heart" aria-hidden="true"></i>
        </div>
        <button className="btn" onClick={handleActiveReset} >Reset</button>
      </div>
      <div className="right-slider">

        {players && players.map((player,i) =>
          <div className="databox-single" key={'player' + i}><div className="single-text">{player.name}</div></div>)}

        {monsterArr && monsterArr.map((monster,i) =>
          <div className="databox-single" key={'monster' + i} onClick={handleSearchClick.bind(this, monster.id)}><div className="single-text">{monster.name}</div></div>)}
        {campaign.monsters && campaign.monsters.map((monster,i) =>
          <div className="databox-single" key={'monster' + i} onClick={handleSearchClick.bind(this, monster.id)}><div className="single-text">{monster.name}</div></div>)}
      </div>
    </section>
  );


}
export default RightSidePopOut;
