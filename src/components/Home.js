import React from 'react';

class Home extends React.Component {
  state = {

  }

  render(){
    return(
      <div className="campaign-list-box">
        <div className="home-logo-box">
          <img className="delver-home-logo" src="https://i.imgur.com/UDI7zoe.png" alt="Delver"/>
        </div>
        <hr/>
        <div>Dungeons And Dragons Homepage</div>
      </div>
    );
  }

}

export default Home;
