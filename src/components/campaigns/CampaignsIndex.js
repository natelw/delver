import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class CampaignsIndex extends React.Component {
  state = {
    campaigns: []
  }

  componentWillMount(){
    Axios
      .get('/api/campaigns')
      .then(res => this.setState({ campaigns: res.data }))
      .catch(err => console.log(err));
  }


  render(){
    return(
      <main>
        <div className="campaign-list-box">
          <h1>Join a campaign</h1>
          <div className="search-container">
            {this.state.campaigns && this.state.campaigns.map(campaign => {
              return(
                <Link key={campaign.id} to={`/campaigns/${campaign.id}`}>
                  <div className="databox-single"><div className="single-text">{campaign.name}</div></div>
                </Link>

              );
            }
            )}
          </div>
          <hr/>
          <Link to="/campaigns/new"><div className="btn">Create</div></Link>
        </div>
      </main>
    );
  }
}


export default CampaignsIndex;
