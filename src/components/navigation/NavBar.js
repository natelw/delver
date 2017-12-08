import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Auth from '../../lib/Auth';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = ({history}) => {

  function logout(e) {
    e.preventDefault();

    Auth.removeToken();
    history.push('/');
  }


  return(
    <Navbar>
      <Nav>
        <div className="navbar-main">
          { !Auth.isAuthenticated() && <Link to="/login" className="nav-button">Login</Link>}
          {' '}
          { !Auth.isAuthenticated() && <Link to="/register" className="nav-button">Register</Link>}
          {' '}
          { Auth.isAuthenticated() && <Link to="/spells" className="nav-button">Search</Link>}
          {' '}
          { Auth.isAuthenticated() && <a href="#" className="nav-button" onClick={logout}>Logout</a>}
        </div>
      </Nav>
    </Navbar>
  );

};


export default withRouter(NavBar);
