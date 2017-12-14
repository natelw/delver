import React from 'react';
import { withRouter} from 'react-router-dom';
import Auth from '../../lib/Auth';

const CampaignNavBar = ({campaign, deleteCampaign, handleHomeClick, handleNewSheet, handleCampEditClick, handleDiceRoller}) => {


  return(
    <div className="campaign-title-bar">

      { Auth.isAuthenticated() && <div onClick={handleHomeClick} className="campaign-nav-link">Home{' '}
        <i className="fa fa-home" aria-hidden="true"></i></div>}
      { Auth.isAuthenticated() && <div onClick={handleNewSheet} className="campaign-nav-link">New Sheet{' '}
        <i className="fa fa-address-card-o" aria-hidden="true"></i></div>}
      { Auth.isAuthenticated() && <div onClick={handleDiceRoller} className="campaign-nav-link">Dice Roller{' '}
        <i className="fa fa-random" aria-hidden="true"></i>
      </div>}
      { Auth.isAuthenticated() && <div onClick={handleCampEditClick} className="campaign-nav-link">Edit Campaign{' '}<i className="fa fa-pencil-square-o" aria-hidden="true"></i></div>}


      <span className='campaign-title'>{campaign.name}</span>
      { Auth.isAuthenticated() && <div onClick={deleteCampaign} className="campaign-delete-button">Delete Campaign <i className="fa fa-ban" aria-hidden="true"></i></div>}

    </div>
  );

};


export default withRouter(CampaignNavBar);
