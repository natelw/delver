import React from 'react';
import Axios from 'axios';

import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';

class SpellSheet extends React.Component {
  state = {
    spell: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/spells/${this.props.match.params.id}`)
      .then(res => this.setState({ spell: res.data }))
      .catch(err => console.log(err));
  }

  render(){
    return(
      <main>
        <h1>Sheet Viewer</h1>

        <h1>{this.state.spell.name} </h1>
        {this.state.spell.desc && this.state.spell.desc.map(desc=> <p key={this.state.spell.id}>{desc}</p>)}



      </main>
    );
  }
}


export default SpellSheet;
