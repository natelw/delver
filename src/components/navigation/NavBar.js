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
    <Navbar>
      <Nav>
        { !Auth.isAuthenticated() && <NavItem componentClass={Link} href="/login" to="/login" active={location.pathname === '/login'}>Login</NavItem>}
        { !Auth.isAuthenticated() && <NavItem componentClass={Link} href="/register" to="/register" active={location.pathname === '/register'}>Register</NavItem>}
        { Auth.isAuthenticated() && <NavItem componentClass={Link} href="/spells" to="/spells" active={location.pathname === '/spells'}>Search</NavItem>}
        { Auth.isAuthenticated() && <NavItem componentClass={Link} href="/sheets" to="/sheets" active={location.pathname === '/sheets'}>Sheets</NavItem>}
        { Auth.isAuthenticated() && <NavItem href="#" className="nav-button" onClick={logout}>Logout</NavItem>}
      </Nav>
    </Navbar>
  );

};


export default withRouter(NavBar);
