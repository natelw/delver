import React from 'react';
import Axios from 'axios';

import CampaignsForm from './CampaignsForm';
import Auth from '../../lib/Auth';

class CampaignsEdit extends React.Component{
  state = {
    campaign: {
    }
  }


  componentDidMount() {
    Axios
      .get(`/api/campaigns/${this.props.campaign.id}`)
      .then(res => this.setState({ campaign: res.data }))
      .catch(err => console.log(err));
  }

handleChange = ({ target: { name, value } }) => {
  const campaign = Object.assign({}, this.state.campaign, { [name]: value });
  this.setState({ campaign });
}

handleSubmit = (e) => {
  e.preventDefault();

  Axios
    .put(`/api/campaigns/${this.props.campaign.id}`, this.state.campaign, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
    })
    .then(res => this.props.history.push(`/campaigns/${res.data.id}`))
    .catch(err => console.log(err));
}



render(){
  return(
    <main>
      <div className="campaign-list-box">
      <h1>Edit Campaign</h1>
      <CampaignsForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        campaign={this.state.campaign}
      />
    </div>
    </main>
  );
}
}


export default CampaignsEdit;
