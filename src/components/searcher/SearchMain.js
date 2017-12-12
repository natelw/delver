import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import MonsterBox from './MonsterBox';
import MonsterSearchBar from './MonsterSearchBar';
import {Col} from 'react-bootstrap';
import SearchBar from '../searcher/SearchBar';
import Spellbox from '../searcher/Spellbox';

class SearchMain extends React.Component {
  state = {
    monsters: [],
    monster: {},
    monsterID: '',
    sortBy: 'name',
    sortDirection: 'asc',
    query: '',
    isHidden: 'none',
    monsterArr: [],
    spells: []
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
  }

  handleAddMonster = () => {
    this.setState({ monsterArr: [...this.state.monsterArr, this.state.monster] });
    console.log(this.state.monsterArr);
  }


  componentWillMount(){
    Axios
      .get('/api/monsters')
      .then(res => this.setState({monsters: res.data}))
      .catch(err => console.log(err));

    Axios
      .get('/api/spells')
      .then(res => this.setState({spells: res.data}))
      .catch(err => console.log(err));
  }

  SearchSorter(){

    const { sortBy, sortDirection, query, classQuery } = this.state;
    const regex = new RegExp(query, 'i');
    const classRegex = new RegExp(classQuery, 'i');

    if(this.props.searchState === 'monster'){
      const orderedMonsters = _.orderBy(this.state.monsters, [sortBy],[sortDirection]);
      const categoryMonsters = _.filter(orderedMonsters, (monster) =>{
        return classRegex.test(monster.size);
      });
      const monsters = _.filter(categoryMonsters, (monster) => {
        return regex.test(monster.name);
      });
      return monsters;
    }else if(this.props.searchState === 'spell'){
      const orderedSpells = _.orderBy(this.state.spells, [sortBy],[sortDirection]);
      const classedSpells = _.filter(orderedSpells, (spell) =>{
        return classRegex.test(spell.classes[0].name);
      });
      const spells = _.filter(classedSpells, (spell) => {
        return regex.test(spell.name);
      });
      return spells;
    }
  }




  render(){
    const monsters = this.SearchSorter();
    const spells = this.SearchSorter();

    return(
      <section>
        <Col xs={4}>

          <button onClick={this.props.handleSearchChange.bind(this, 'monster')}>monsters</button>
          <button onClick={this.props.handleSearchChange.bind(this, 'spell')}>spells</button>
          <button onClick={this.props.handleSearchChange.bind(this, 'feature')}>features</button>
          <button onClick={this.props.handleSearchChange.bind(this, 'equipment')}>equipment</button>


          {this.props.searchState === 'monster' &&
          <div className="search-main-box">
            <MonsterSearchBar
              handleSort={this.handleSort}
              handleSearch={this.handleSearch}
              handleClassSort={this.handleClassSort}
            />
            <div className="search-container">
              {monsters.map(monster =>
                <a className='monster-link' href="#" key={'monmon' + monster.id} data-id={monster.id} onClick={this.props.handleSearchClick.bind(this, monster.id)}>
                  <MonsterBox {...monster} /></a>
              )}
            </div>
          </div>
          }{this.props.searchState === 'spell' &&
        <div className="search-main-box">
          <SearchBar
            handleSort={this.handleSort}
            handleSearch={this.handleSearch}
            handleClassSort={this.handleClassSort}
          />

          <div className="search-container">
            {spells.map(spell =>


              <a className='spell-link' href="#" key={'spespe' + spell.id} data-id={spell.id} onClick={this.props.handleSearchClick.bind(this, spell.id)}>
                <Spellbox {...spell} /></a>
            )}
          </div>
        </div>}
        </Col>

      </section>
    );
  }

}
export default SearchMain;
