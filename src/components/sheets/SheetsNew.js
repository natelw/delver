import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import SheetsForm from './SheetsForm';

class SheetsNew extends React.Component {
state = {
  sheet: {}
}

  handleChange = ({ target: { name, value } }) => {
    const sheet = Object.assign({}, this.state.sheet, { [name]: value });
    this.setState({ sheet });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/sheets', this.state.sheet)
      .then(() => this.props.history.push('/sheets'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <SheetsForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        sheet={this.state.sheet}
      />
    );
  }

}

export default SheetsNew;
