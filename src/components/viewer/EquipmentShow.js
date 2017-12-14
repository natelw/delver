import React from 'react';

const EquipmentShow = ({ equipment }) => {
  return (
    <div>
      <h1>{equipment.name}</h1>


      <h3>{equipment.equipment_category}</h3>
      <h3>{equipment.weapon_category}</h3>
      <h3>{equipment.tool_category}</h3>
      <h3>{equipment.vehicle_category}</h3>

      {equipment.desc && equipment.desc.map((desc,i) =>
        <p key={'desc' + i}>{desc}</p>)}

      <p>{equipment.weapon_range}</p>
      <p>{equipment.category_range}</p>
      <h3>{equipment.cost && equipment.cost.quantity + equipment.cost.unit}</h3>
      <p>{equipment.damage_type && equipment.damage_type.name}</p>
      <h3>Weight: {equipment.weight} </h3>

      {equipment.properties && equipment.properties.map((name,i) =>
        <p key={'properties' + i}>{name.name}</p>)}
      <p>{equipment.armor_category && equipment.armor_category.name}</p>
      <p>{equipment.armor_class && 'AC:' + equipment.armor_class.base + ' Dex Bonus: ' + equipment.armor_class.dex_bonus} </p>

      <p>{equipment.str_minimum && equipment.str_minimum}</p>

    </div>
  );
};

export default EquipmentShow;
