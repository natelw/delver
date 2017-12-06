import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class SpellsSearch extends React.Component {
  state = {
    spells: []
  }

  componentWillMount(){
    Axios
      .get('/api/spells')
      .then(res => this.setState({ spells: res.data }))
      .catch(err => console.log(err));
  }

  render(){
    return(
      <section>
        <h1>All Spells</h1>
        {this.state.spells && this.state.spells.map(spell => {
          return(
            <div key={spell.index} className="spell-single"><p>{spell.name}</p></div>
          );
        })
        }
      </section>
    );
  }

}
export default SpellsSearch;
