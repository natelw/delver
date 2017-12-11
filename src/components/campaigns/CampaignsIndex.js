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
        <h1>Join a campaign</h1>
        {this.state.campaigns && this.state.campaigns.map(campaign => {
          return(
            <Link key={campaign.id} to={`/campaigns/${campaign.id}`}>
              <div className="single-campaign"><p>{campaign.name}</p></div>
            </Link>
          );
        }
        )}
      </main>
    );
  }
}


export default CampaignsIndex;
