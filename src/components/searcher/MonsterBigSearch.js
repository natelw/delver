import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import MonsterBox from './MonsterBox';
import MonsterSearchBar from './MonsterSearchBar';

class MonsterBigSearch extends React.Component {
  state = {
    monsters: [],
    sortBy: 'name',
    sortDirection: 'asc',
    query: ''
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



  componentWillMount(){
    Axios
      .get('/api/monsters')
      .then(res => this.setState({monsters: res.data}))
      .catch(err => console.log(err));
  }

  MonsterSearchSorter(){
    const { sortBy, sortDirection, query, classQuery } = this.state;
    const regex = new RegExp(query, 'i');
    const classRegex = new RegExp(classQuery, 'i');
    const orderedMonsters = _.orderBy(this.state.monsters, [sortBy],[sortDirection]);
    const categoryMonsters = _.filter(orderedMonsters, (monster) =>{
      return classRegex.test(monster.size);
    });
    const monsters = _.filter(categoryMonsters, (monster) => {
      return regex.test(monster.name);
    });
    return monsters;
  }



  render(){
    const monsters = this.MonsterSearchSorter();
    return(
      <section>
        <h3>All Monsters</h3>
        <div className="search-main-box">
          <MonsterSearchBar
            handleSort={this.handleSort}
            handleSearch={this.handleSearch}
            handleClassSort={this.handleClassSort}
          />

          <div className="search-container">
            {monsters.map(monster => <Link key={monster.id} to={`/equipments/${monster.id}`}><MonsterBox {...monster} /></Link>)}
          </div>
        </div>

        <div className="equip-sheet-viewer">
        </div>
      </section>
    );
  }

}
export default MonsterBigSearch;
