import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class BigSearch extends React.Component {
  state = {
    spells: [],
    proficiencies: [],
    equipments: []
  }

  componentWillMount(){
    Axios
      .get('/api/spells')
      .then(res => this.setState({ spells: res.data }))
      .catch(err => console.log(err));

    Axios
      .get('/api/proficiencies')
      .then(res => this.setState({proficiencies: res.data}))
      .catch(err => console.log(err));

    Axios
      .get('/api/equipments')
      .then(res => this.setState({equipments: res.data}))
      .catch(err => console.log(err));
  }

  render(){
    return(
      <section>
        <h1>All Spells</h1>
        <div className="search-container">
          {this.state.spells && this.state.spells.map(spell => {
            return(
              <div key={spell.index} className="databox-single"><div className="single-text">{spell.name}</div>
                <div className="single-level">{spell.level}</div></div>
            );
          })
          }
        </div>


        <div className="search-container">
          {this.state.proficiencies && this.state.proficiencies.map(proficiency => {
            return(
              <div key={proficiency.index} className="databox-single"><div className="single-text">{proficiency.name}</div>
                <div className="single-level"></div></div>
            );
          })
          }
        </div>

        <div className="search-container">
          {this.state.equipments && this.state.equipments.map(equipments => {
            return(
              <div key={equipments.index} className="databox-single"><div className="single-text">{equipments.name}</div>
                <div className="single-level"></div></div>
            );
          })
          }
        </div>
      </section>
    );
  }

}
export default BigSearch;
