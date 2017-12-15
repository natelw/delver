import React from 'react';

const EquipmentShow = ({ equipment }) => {
  return (
    <div>
      <h1>{equipment.name}</h1>
      <hr/>

      <p>{equipment.weapon_category}</p>
      <p>{equipment.tool_category}</p>
      <p>{equipment.vehicle_category}</p>

      {equipment.desc && equipment.desc.map((desc,i) =>
        <p key={'desc' + i}>{desc}</p>)}

      <p>{equipment.weapon_range}</p>
      <p>{equipment.category_range}</p>
      <p>Weight: {equipment.weight} </p>
      <hr/>
      <div className="equip-cost-read-out"><h3>{equipment.cost && equipment.cost.quantity + equipment.cost.unit}</h3></div>
      <p>{equipment.damage_type && equipment.damage_type.name}</p>

      {equipment.properties && equipment.properties.map((name,i) =>
        <p key={'properties' + i}>{name.name}</p>)}
      <p>{equipment.armor_category && equipment.armor_category.name}</p>
      <p>{equipment.armor_class && 'AC:' + equipment.armor_class.base + ' Dex Bonus: ' + equipment.armor_class.dex_bonus} </p>

      <p>{equipment.str_minimum && equipment.str_minimum}</p>

    </div>
  );
};

export default EquipmentShow;
