import React from 'react';

const MonsterShow = ({ monster, handleAddMonsterClick }) => {
  return (
    <div>
      <div className="favourite-button"  onClick={handleAddMonsterClick}>
        <i className="fa fa-heart" aria-hidden="true"></i>
      </div>
      <div className="vertical-stats-box">
        <div className="stat-viewer-box">AC:<div className="stat-read-out">{monster.armor_class}</div></div>
        <div className="stat-viewer-box">HP:<div className="stat-read-out">{monster.hit_points}</div></div>
        <div className="stat-viewer-box">Str:<div className="stat-read-out">{ monster.strength}</div></div>
        <div className="stat-viewer-box">Dex:<div className="stat-read-out">{ monster.dexterity}</div></div>
        <div className="stat-viewer-box">Con:<div className="stat-read-out">{ monster.constitution}</div></div>
        <div className="stat-viewer-box">Int:<div className="stat-read-out">{ monster.intelligence}</div></div>
        <div className="stat-viewer-box">Wis:<div className="stat-read-out">{ monster.wisdom}</div></div>
        <div className="stat-viewer-box">Cha:<div className="stat-read-out">{ monster.charisma}</div></div>
      </div>
      <h1>{monster.name}</h1>
      <hr/>
      <div className="monster-top-stats">
        <div className="key-stat-box">{monster.size}</div>
        <div className="key-stat-box">{monster.type}</div>
        <div className="key-stat-box">{monster.subtype}</div>
        <div className="key-stat-box">{monster.alignment}</div>
      </div>



      <h3>{'Challenge Rating: ' + monster.challenge_rating}</h3>
      <div className="resistance-box">
        <p>{'Speed:' + monster.speed}</p>
        <p>{monster.senses && 'Senses: ' + monster.senses}</p>
        <p>{monster.languages && 'Languages: ' + monster.languages}</p>
        <p>{monster.damage_vulnerabilities && 'Damage Vunerability: ' + monster.damage_vulnerabilities}</p>
        <p>{monster.damage_resistances && 'Damage Resistance: ' + monster.damage_resistances}</p>
        <p>{monster.damage_immunities && 'Damage Immunities: ' + monster.damage_immunities}</p>
        <p>{monster.condition_immunities && 'Condition Immunities: ' + monster.condition_immunities}</p>
      </div>
      <hr/>
      {monster.actions && monster.actions.map((action,i) =>
        <p key={'actmonst' + i}>{action.desc}</p>)}


      <div className="monster-saves-resists">

        {/* <p>{monster.strength_save}</p>
        <p>{monster.dexterity_save}</p>
        <p>{monster.constitution_save}</p>
        <p>{monster.intelligence_save}</p>
        <p>{monster.wisdom_save}</p>
        <p>{monster.charisma_save}</p>
        <p>{monster.acrobatics}</p>
        <p>{monster.animal_Handling}</p>
        <p>{monster.arcana}</p>
        <p>{monster.athletics}</p>
        <p>{monster.deception}</p>
        <p>{monster.history}</p>
        <p>{monster.insight}</p>
        <p>{monster.intimidation}</p>
        <p>{monster.investigation}</p>
        <p>{monster.medicine}</p>
        <p>{monster.nature}</p>
        <p>{monster.perception}</p>
        <p>{monster.performance}</p>
        <p>{monster.persuasion}</p>
        <p>{monster.religion}</p>
        <p>{monster.sleight_of_hand}</p>
        <p>{monster.stealth}</p>
        <p>{monster.survival}</p> */}
        <div >{'Hit Dice: ' + monster.hit_dice}</div>

      </div>

    </div>
  );
};

export default MonsterShow;
