import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Auth from '../../lib/Auth';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const CampaignNavBar = ({campaign, deleteCampaign}) => {


  return(
    <div className="campaign-title-bar">
      <span className='campaign-title'>{campaign.name}</span>
      { Auth.isAuthenticated() && <div onClick={deleteCampaign} className="campaign-delete-button">Delete Campaign</div>}
    </div>
  );

};


export default withRouter(CampaignNavBar);
