import React from 'react';
import Axios from 'axios';

import CampaignsForm from './CampaignsForm';

class CampaignsNew extends React.Component {
state = {
  campaign: {}
}

  handleChange = ({ target: { name, value } }) => {
    const campaign = Object.assign({}, this.state.campaign, { [name]: value });
    this.setState({ campaign });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/campaigns', this.state.campaign, ({ createdBy: 'i did this'}))
      .then(() => this.props.history.push('/campaigns'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="campaign-list-box">
        <h1>New Campaign</h1>
        <CampaignsForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          campaign={this.state.campaign}
        />
      </div>
    );
  }

}

export default CampaignsNew;
