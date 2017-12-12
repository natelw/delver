import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Auth from '../../lib/Auth';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const CampaignNavBar = ({campaign}) => {


  return(
    <Navbar>
      <Navbar.Brand>
        <NavItem>{campaign.name}</NavItem>
      </Navbar.Brand>
      <Nav pullRight>
        { Auth.isAuthenticated() && <NavItem componentClass={Link} href="/campaigns" to="/campaigns" active={location.pathname === '/campaigns'}>All Campaigns</NavItem>}

      </Nav>
    </Navbar>
  );

};


export default withRouter(CampaignNavBar);