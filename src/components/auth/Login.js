import React     from 'react';
import Axios     from 'axios';

import RegForm from './RegForm';
import Auth from '../../lib/Auth';

class Login extends React.Component {
  state = {
    user: {
      email: '',
      password: ''
    }
  };

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/login', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        this.props.history.push('/campaigns');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="campaign-list-box">
        <img className="delver-home-logo" src="https://i.imgur.com/UDI7zoe.png" alt="Delver"/>
        <hr/>
        <h3>Log in</h3>
        <hr/>
        <RegForm
          user={this.state.user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Login;
