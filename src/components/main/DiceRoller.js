import React from 'react';
import SearchMain from '../searcher/SearchMain';
import {Col} from 'react-bootstrap';
class DiceRoller extends React.Component {
  state = {
    numOfSides: 6,
    d2: 1,
    d3: 1,
    d6: 1,
    d8: 1,
    d10: 1,
    d12: 1,
    d20: 1
  };


  handleRollInitDice = () => {
    forEach
    const randomD20 = Math.floor(Math.random() * 20) + 1;
    this.setState({monsterInit: randomD20});

  }

  render(){
    return(
      <section>
        <h3>Dice Roller</h3>

        <button>Roll</button>
      </section>
    );
  }

}
export default DiceRoller;
