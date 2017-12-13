import React from 'react';
import {Col} from 'react-bootstrap';
import MonsterShow from './MonsterShow';
import SpellShow from './SpellShow';
import FeatureShow from './FeatureShow';
import EquipmentShow from './EquipmentShow';
import SheetShow from './SheetShow';

const MiddleViewer = ({
  handleExitClick,
  monster,
  isHidden,
  handleAddMonsterClick,
  spell,
  searchState,
  feature,
  equipment,
  sheet
}) => {

  return (
    <Col md={6}>
      <div className="sheet-viewer" style={{ display: isHidden ? 'none' : null }}>
        <a href="#" onClick={handleExitClick}>X</a>
        <a href="#" onClick={handleAddMonsterClick}>Add</a>
        <h1>{searchState}</h1>

        {
          searchState === 'monster'
            ? <MonsterShow monster={monster}/>
            : null
        }
        {
          searchState === 'spell'
            ? <SpellShow spell={spell}/>
            : null
        }
        {
          searchState === 'feature'
            ? <FeatureShow feature={feature}/>
            : null
        }
        {
          searchState === 'equipment'
            ? <EquipmentShow equipment={equipment}/>
            : null
        }
        {
          searchState === 'sheet'
            ? <SheetShow sheet={sheet}/>
            : null
        }
      </div>
    </Col>
  );
};



export default MiddleViewer;
