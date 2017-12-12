import React from 'react';
import {Col} from 'react-bootstrap';


const MiddleViewer = ({ handleExitClick, monster, isHidden }) => {

  return (
    <Col xs={4}>
      <div className="sheet-viewer" style={{ display: isHidden ? 'none' : null }}>
        <a href="#" onClick={handleExitClick}>X</a>
        <h1>{monster.name}</h1>
        {monster.actions && monster.actions.map((action,i) =>
          <p key={'actmonst' + i}>{action.desc}</p>)}

      </div>
    </Col>
  );
};



export default MiddleViewer;
