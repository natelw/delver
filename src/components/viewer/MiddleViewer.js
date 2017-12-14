import React from 'react';
import {Col, Nav, NavItem} from 'react-bootstrap';
import MonsterShow from './MonsterShow';
import SpellShow from './SpellShow';
import FeatureShow from './FeatureShow';
import EquipmentShow from './EquipmentShow';
import SheetShow from './SheetShow';
import SheetsNew from '../sheets/SheetsNew';
import CampaignsEdit from '../campaigns/CampaignsEdit';
import DiceRoller from '../main/DiceRoller';

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
  handleCampEditClick,
  handleDiceRoller
}) => {

  return (
    <section>
      <div className="back-viewer">
        <Nav bsStyle="tabs" justified>
          <NavItem onClick={handleHomeClick}>Home</NavItem>
          <NavItem onClick={handleCampEditClick}>Edit Campaign</NavItem>
          <NavItem onClick={handleNewSheet}>New Character Sheet</NavItem>
          <NavItem onClick={handleDiceRoller}>Dice Roller</NavItem>

        </Nav>
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
