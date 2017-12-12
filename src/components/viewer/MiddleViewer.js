import React from 'react';
import {Col} from 'react-bootstrap';
import MonsterShow from './MonsterShow';
import SpellShow from './SpellShow';
import FeatureShow from './FeatureShow';

const MiddleViewer = ({
  handleExitClick,
  monster,
  isHidden,
  handleAddMonsterClick,
  spell,
  searchState,
  feature
}) => {

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
        {
          searchState === 'feature'
            ? <FeatureShow feature={feature}/>
            : null
        }

      </div>
    </Col>
  );
};



export default MiddleViewer;
