import React from 'react';
import MonsterShow from './MonsterShow';
import SpellShow from './SpellShow';
import FeatureShow from './FeatureShow';
import EquipmentShow from './EquipmentShow';
import SheetShow from './SheetShow';
import SheetsNew from '../sheets/SheetsNew';
import CampaignsEdit from '../campaigns/CampaignsEdit';
import DiceRoller from '../main/DiceRoller';
import Home from './Home';
import SheetsEdit from '../sheets/SheetsEdit';

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
  handleAddSheetClick,
  mainState,
  campaign,
  handleEditSheetClick
}) => {

  return (
    <section>
      <div className="back-viewer">
        {
          mainState === 'editsheet'
            ? <SheetsEdit sheet={sheet} handleEditSheetClick={handleEditSheetClick}/>
            : null
        }
        {
          mainState === 'newsheet'
            ? <SheetsNew/>
            : null
        }
        {
          mainState === 'campaignedit'
            ?  <CampaignsEdit campaign={campaign}/>
            : null
        }
        {
          mainState === 'diceroller'
            ?  <DiceRoller />
            : null
        }
        {
          mainState === 'home'
            ?  <Home />
            : null
        }
      </div>
      <div className="sheet-viewer" style={{ display: isHidden ? 'none' : null }}>
        <div className="close-button-box" href="#" onClick={handleExitClick}><i className="fa fa-window-close" aria-hidden="true"></i>
        </div>
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
              ? <SheetShow sheet={sheet} handleAddSheetClick={handleAddSheetClick} handleEditSheetClick={handleEditSheetClick}/>
              : null
          }
        </div>
      </div>
    </section>
  );
};



export default MiddleViewer;
