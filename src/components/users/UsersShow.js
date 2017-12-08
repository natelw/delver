import React from 'react';
import Axios from 'axios';

import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';

class UsersShow extends React.Component {
  state = {
    user: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  deleteUser = () => {
    Axios
      .delete(`/api/users/${this.props.match.params.id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render(){
    return(
      <main>
        <h1>User Show</h1>

        <h1>{this.state.user.username} </h1>
        <h3>{this.state.user.email}</h3>

        { Auth.isAuthenticated() && <button className="delete-button" onClick={this.deleteUser}>DELETE ACCOUNT</button>}
        { Auth.isAuthenticated() && <Link to={`/sheets/${this.state.user.id}/edit`} className="edit-button"><button>Edit</button>
        </Link>}

      </main>
    );
  }
}


export default UsersShow;
