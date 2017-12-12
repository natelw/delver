import React from 'react';
import {Col} from 'react-bootstrap';

class MiddleViewer extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick = () => {
    this.setState({isHidden: 'none'});
  };


  handleAddMonster = () => {
    console.log(this.state.monsterArr);
  };
  render(){
    return (
      <Col xs={4}>
        <div className="sheet-viewer" style={{ display: this.props.isHidden ? 'none' : null }}>
          <a href="#" onClick={this.handleClick}>X</a>
          <h1>{this.props.monster}</h1>
          <a href="#" onClick={this.handleAddMonster}>Add Monster</a>
          {this.props.monster.actions && this.props.monster.actions.map((action,i) =>
            <p key={'actmonst' + i}>{action.desc}</p>)}

        </div>
      </Col>
    );
  }
}


export default MiddleViewer;
