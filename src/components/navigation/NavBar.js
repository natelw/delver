import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Auth from '../../lib/Auth';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const NavBar = ({history}) => {

  function logout(e) {
    e.preventDefault();

    Auth.removeToken();
    history.push('/login');
  }


  return(

    <div className="main-nav-bar">
      <Link to="/" href="#"><img className="delver-logo" src="https://i.imgur.com/UDI7zoe.png" alt="Delver"/></Link>


      { !Auth.isAuthenticated() && <Link to="/register" className="nav-button">Register</Link>}
      {' '}
      { !Auth.isAuthenticated() && <Link to="/login" className="nav-button">Login</Link>}
      {' '}
      { Auth.isAuthenticated() && <div href="#" className="nav-button" onClick={logout}>Logout</div>}
      {' '}
      { Auth.isAuthenticated() && <Link to="/campaigns" className="nav-button">Campaigns</Link>}
    </div>
  );

};


export default withRouter(NavBar);
