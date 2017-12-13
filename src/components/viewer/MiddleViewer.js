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
  sheet,
  handleAddSheetClick
}) => {

  return (
    <div className="sheet-viewer" style={{ display: isHidden ? 'none' : null }}>
      <a href="#" onClick={handleExitClick}>X</a>
      <div className="viewer-info-box">
        {
          searchState === 'monster'
            ? <MonsterShow monster={monster} handleAddMonsterClick={handleAddMonsterClick}/>
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
            ? <SheetShow sheet={sheet} handleAddSheetClick={handleAddSheetClick}/>
            : null
        }
      </div>
    </div>

  );
};



export default MiddleViewer;
