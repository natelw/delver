import React        from 'react';
import RegForm from './RegForm';
import Axios        from 'axios';

import Auth from '../../lib/Auth';

class Register extends React.Component {
  state = {
    user: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  };

  handleChange = ({ target: { name, value }}) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/register', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        this.props.history.push('/campaigns');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="campaign-list-box">
          <img className="delver-home-logo" src="https://i.imgur.com/UDI7zoe.png" alt="Delver"/>
          <hr/>
          <h3>Register</h3>
          <hr/>
          <RegForm
            user={this.state.user}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Register;
