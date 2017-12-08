import React from 'react';
import Axios from 'axios';

import SheetsForm from './SheetsForm';
import Auth from '../../lib/Auth';

class SheetsEdit extends React.Component{
  state = {
    sheet: {
    }
  }

  render(){
    return(
      <main>
        <h1>Edit Sheet</h1>
        <SheetsForm
          history={this.props.history}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          sheet={this.state.sheet}
        />
      </main>
    );
  }

  componentDidMount() {
    Axios
      .get(`/api/sheets/${this.props.match.params.id}`)
      .then(res => this.setState({ sheet: res.data }))
      .catch(err => console.log(err));
  }

handleChange = ({ target: { name, value } }) => {
  const sheet = Object.assign({}, this.state.sheet, { [name]: value });
  this.setState({ sheet });
}

handleSubmit = (e) => {
  e.preventDefault();

  Axios
    .put(`/api/sheets/${this.props.match.params.id}`, this.state.sheet, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
    })
    .then(res => this.props.history.push(`/sheets/${res.data.id}`))
    .catch(err => console.log(err));
}
}


export default SheetsEdit;
