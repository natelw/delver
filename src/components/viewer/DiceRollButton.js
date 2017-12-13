import React from 'react';

function DiceRollButton(handleRollInitDice){
  return(
    <div className="initDiceRoll">
      <div onClick={handleRollInitDice}>Roll</div>
    </div>
  );


}
export default DiceRollButton;
