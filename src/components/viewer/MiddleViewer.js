import React from 'react';
import {Col} from 'react-bootstrap';
import MonsterShow from './MonsterShow';
import SpellShow from './SpellShow';
import FeatureShow from './FeatureShow';
import EquipmentShow from './EquipmentShow';
import SheetShow from './SheetShow';
import SheetsNew from '../sheets/SheetsNew';
import CampaignsEdit from '../campaigns/CampaignsEdit';
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
  handleNewSheet,
  mainState,
  handleHomeClick,
  campaign,
  handleCampEditClick
}) => {

  return (
    <section>
      <div className="back-viewer">

        <button onClick={handleHomeClick}>Home</button>
        <button onClick={handleCampEditClick}>Edit Campaign</button>
        <button onClick={handleNewSheet}>New Character Sheet</button>
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
      </div>
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
    </section>
  );
};



export default MiddleViewer;
