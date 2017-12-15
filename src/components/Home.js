import React from 'react';
import {Link} from 'react-router-dom';
class Home extends React.Component {
  state = {

  }

  render(){
    return(
      <div className="campaign-list-box">
        <div className="home-logo-box">
          <img className="dnd-logo" src="https://i.imgur.com/PPMCKl7.png" alt="dnd"/>
        </div>
        <img className="delver-home-logo" src="https://i.imgur.com/UDI7zoe.png" alt="Delver"/>
        <hr/>
        <div>Welcome to Delver, the Dungeons and Dragons Dungeon Master helper!</div>
        <hr/>
        <Link to="/login" className="btn">Log In</Link>
        <Link to="/register" className="btn">Register</Link>

      </div>
    );
  }

}

export default Home;
