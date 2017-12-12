import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import MonsterBox from '../searcher/MonsterBox';
import SearchMain from '../searcher/SearchMain';
import RightSidePopOut from '../viewer/RightSidePopOut';
import MiddleViewer from '../viewer/MiddleViewer';
import {Col} from 'react-bootstrap';

class MainControl extends React.Component {
  state = {
    monsters: [],
    monster: {name: 'NO MONSTERS'},
    monsterID: '',
    sortBy: 'name',
    sortDirection: 'asc',
    query: '',
    isHidden: 'none',
    monsterArr: [],
    searchState: 'spell',
    players: [{name: 'jimmy', initiative: 5},{name: 'alice', initiative: 12}],
    spell: {}

  };

  handleSearchChange = (changeTo) => {
    this.setState({searchState: changeTo});
  }

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
    console.log(this.state.monsterArr);
  }

  handleSearchClick = (thingId) => {
    if(this.state.searchState === 'monster'){
      Axios
        .get(`/api/monsters/${thingId}`)
        .then(res => this.setState({monster: res.data,isHidden: null}))
        .catch(err => console.log(err));
    }else if(this.state.searchState === 'spell'){
      Axios
        .get(`/api/spells/${thingId}`)
        .then(res => this.setState({spell: res.data,isHidden: null}))
        .then(console.log(this.state.spell))
        .catch(err => console.log(err));
    }
  }

    handleExitClick = () => {
      this.setState({isHidden: 'none'});
    };

    handleAddMonsterClick = () => {
      this.setState({ monsterArr: [...this.state.monsterArr, this.state.monster] });
      console.log(this.state.monsterArr[0]);
    }

    saveBattle = () => {


    }

    render(){
      return(
        <section>
          <SearchMain
            handleSearchClick={this.handleSearchClick}
            searchState={this.state.searchState}
            handleSearchChange={this.handleSearchChange}
          />
          <MiddleViewer
            handleExitClick={this.handleExitClick}
            monster={this.state.monster}
            spell={this.state.spell}
            isHidden={this.state.isHidden}
            handleAddMonsterClick={this.handleAddMonsterClick}
            searchState={this.state.searchState}
          />
          <RightSidePopOut
            monsterArr={this.state.monsterArr}
            players={this.state.players}
            saveBattle={this.saveBattle}
          />
        </section>
      );
    }

}
export default MainControl;
