import React from 'react';

const MonsterShow = ({ monster, handleAddMonsterClick }) => {
  return (
    <div>
      <a href="#" onClick={handleAddMonsterClick}>Add Monster</a>

      <h1>{monster.name}</h1>
      <div className="monster-top-stats">
        <h3>{'Challenge Rating: ' + monster.challenge_rating}</h3>

        <p>{monster.size}</p>
        <p>{monster.type}</p>
        <p>{monster.subtype}</p>
        <p>{monster.alignment}</p>
      </div>
      {monster.actions && monster.actions.map((action,i) =>
        <p key={'actmonst' + i}>{action.desc}</p>)}

      <div className="monster-statystats">
        <p>{monster.armor_class}</p>
        <p>{'Hit Points:' + monster.hit_points}</p>
        <p>{'Hit Dice:' + monster.hit_dice}</p>
        <p>{'Speed:' + monster.speed}</p>
        <p>{'Str:' + monster.strength}</p>
        <p>{'Dex:' + monster.dexterity}</p>
        <p>{'Con:' + monster.constitution}</p>
        <p>{'Int:' + monster.intelligence}</p>
        <p>{'Wis:' + monster.wisdom}</p>
        <p>{'Cha;' + monster.charisma}</p>
      </div>
      <div className="monster-saves-resists">
        <p>{monster.strength_save}</p>
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
        <p>{monster.survival}</p>
      </div>
      <p>{monster.damage_vulnerabilities && 'Damage Vunerability: ' + monster.damage_vulnerabilities}</p>
      <p>{monster.damage_resistances && 'Damage Resistance: ' + monster.damage_resistances}</p>
      <p>{monster.damage_immunities && 'Damage Immunities: ' + monster.damage_immunities}</p>
      <p>{monster.condition_immunities && 'Condition Immunities: ' + monster.condition_immunities}</p>
      <p>{monster.senses && 'Senses: ' + monster.senses}</p>
      <p>{monster.languages && 'Languages: ' + monster.languages}</p>

    </div>
  );
};

export default MonsterShow;
