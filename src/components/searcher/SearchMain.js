import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import MonsterBox from './MonsterBox';
import MonsterSearchBar from './MonsterSearchBar';
import {Col} from 'react-bootstrap';

class SearchMain extends React.Component {
  state = {
    monsters: [],
    monster: {},
    monsterID: '',
    sortBy: 'name',
    sortDirection: 'asc',
    query: '',
    isHidden: 'none',
    monsterArr: []
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

  monsterViewer(monsterId){
    Axios
      .get(`/api/monsters/${monsterId}`)
      .then(res => this.setState({monster: res.data,isHidden: null}))
      .catch(err => console.log(err));
  }


  render(){
    const monsters = this.MonsterSearchSorter();
    return(
      <section>
        <Col xs={4}>

          <h3>All Monsters</h3>
          <div className="search-main-box">
            <MonsterSearchBar
              handleSort={this.handleSort}
              handleSearch={this.handleSearch}
              handleClassSort={this.handleClassSort}
            />
            <div className="search-container">
              {monsters.map(monster =>
                <a className='monster-link' href="#" key={monster.id} data-id={monster.id} onClick={this.props.handleSearchClick.bind(this, monster.id)}>
                  <MonsterBox {...monster} /></a>
              )}



            </div>
          </div>
        </Col>
      </section>
    );
  }

}
export default SearchMain;
