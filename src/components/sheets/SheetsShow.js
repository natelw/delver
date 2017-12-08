import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';

class SheetsShow extends React.Component {
  state = {
    sheet: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/sheets/${this.props.match.params.id}`)
      .then(res => this.setState({ sheet: res.data }))
      .catch(err => console.log(err));
  }

  deleteSheet = () => {
    Axios
      .delete(`/api/sheets/${this.props.match.params.id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/sheets'))
      .catch(err => console.log(err));
  }

  render(){
    return(
      <main>
        <h1>Sheet Show</h1>

        <h1>{this.state.sheet.name} </h1>
        <h3>{this.state.sheet.charclass}</h3>
        <h3>{this.state.sheet.level}</h3>
        <h3>{this.state.sheet.race}</h3>

        { Auth.isAuthenticated() && <button className="delete-button" onClick={this.deleteSheet}>DELETE</button>}
        { Auth.isAuthenticated() && <Link to={`/sheets/${this.state.sheet.id}/edit`} className="edit-button"><button>Edit</button>
        </Link>}

      </main>
    );
  }
}


export default SheetsShow;
