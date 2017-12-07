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
    classQuery: '',
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

  searchSorter(){
    const { sortBy, sortDirection, query, classQuery } = this.state;
    const regex = new RegExp(query, 'i');
    const classRegex = new RegExp(classQuery, 'i');



    const orderedSpells = _.orderBy(this.state.spells, [sortBy],[sortDirection]);
    const classedSpells = _.filter(orderedSpells, (spell) =>{
      return classRegex.test(spell.classes[0].name);
    });
    const spells = _.filter(classedSpells, (spell) => {
      return regex.test(spell.name);
    });
    return spells;
  }


  render(){
    const spells = this.searchSorter();
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
      </section>
    );
  }

}
export default BigSearch;
