import React from 'react';
import {Col} from 'react-bootstrap';
import MonsterShow from './MonsterShow';
import SpellShow from './SpellShow';
const MiddleViewer = ({ handleExitClick, monster, isHidden, handleAddMonsterClick, spell, searchState }) => {

  return (
    <Col xs={4}>
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

      </div>
    </Col>
  );
};



export default MiddleViewer;
