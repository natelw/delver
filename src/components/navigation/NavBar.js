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
      <img className="delver-logo" src="https://i.imgur.com/jkexCON.png" alt="Delver"/>
      {/* { !Auth.isAuthenticated() && <Link href="/login" to="/login">
        <div className="main-nav-link">Login</div></Link>}
        { !Auth.isAuthenticated() && <NavItem componentClass={Link} href="/register" to="/register" active={location.pathname === '/register'}>Register</NavItem>}
        { Auth.isAuthenticated() && <NavItem componentClass={Link} href="/campaigns" to="/campaigns" active={location.pathname === '/campaigns'}>Campaigns</NavItem>}
        { Auth.isAuthenticated() && <NavItem componentClass={Link} href="/sheets/new" to="/sheets/new" active={location.pathname === '/sheets/new'}>New Sheet</NavItem>}
        { Auth.isAuthenticated() && <NavItem componentClass={Link} href="/spells" to="/spells" active={location.pathname === '/spells'}>Search</NavItem>}
        { Auth.isAuthenticated() && <NavItem componentClass={Link} href="/sheets" to="/sheets" active={location.pathname === '/sheets'}>Sheets</NavItem>} */}
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
