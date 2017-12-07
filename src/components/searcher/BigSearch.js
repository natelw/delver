import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import _ from 'lodash';
import Spellbox from './Spellbox';

class BigSearch extends React.Component {
  state = {
    spells: [],
    proficiencies: [],
    equipments: [],
    sortBy: 'name',
    sortDirection: 'asc',
    query: '',
    classQuery:'',
    sortClassBy: ''
  };



  handleSort = (e) => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({ sortBy, sortDirection });

  }

  handleSearch = (e) => {
    this.setState({query: e.target.value});
  }

  handleClassSort = (e) => {
    this.setState({classQuery: e.target.value});
    console.log(e.target.value);
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
    const { sortBy, sortDirection, query } = this.state;
    const regex = new RegExp(query, 'i');

    const orderedSpells = _.orderBy(this.state.spells, [sortBy],[sortDirection]);
    const spells = _.filter(orderedSpells, (spell) => {
      return regex.test(spell.name);
    });
    return(
      <section>
        <h1>All Spells</h1>

        <SearchBar
          handleSort={this.handleSort}
          handleSearch={this.handleSearch}
          handleClassSort={this.handleClassSort}
        />
        <div className="search-container">
          {spells.map(spell => <Spellbox key={spell.index} {...spell} />)}
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
