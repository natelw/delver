import React from 'react';
import SearchMain from '../searcher/SearchMain';
import {Col} from 'react-bootstrap';
class DiceRoller extends React.Component {
  state = {
    result: 1,
    advantage: 1
  };


  handleRollInitDice = () => {

    const randomD20 = Math.floor(Math.random() * 20) + 1;
    const randomanotherD20 = Math.floor(Math.random() * 20) + 1;

    this.setState({result: randomD20, advantage: randomanotherD20});

  }

  render(){
    return(
      <section>
        <div className='campaign-list-box'>
          <h3>Dice Roller</h3>
          <h3><strong>{this.state.result}</strong> {' - ' + this.state.advantage}</h3>
          <button className="btn" onClick={this.handleRollInitDice}>Roll</button>
        </div>
      </section>
    );
  }

}
export default DiceRoller;
