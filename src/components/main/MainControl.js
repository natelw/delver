import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import MonsterBox from '../searcher/MonsterBox';
import SearchMain from '../searcher/SearchMain';

import MiddleViewer from '../viewer/MiddleViewer';
import {Col} from 'react-bootstrap';

class MainControl extends React.Component {
  state = {
    monsters: [],
    monster: {},
    monsterID: '',
    sortBy: 'name',
    sortDirection: 'asc',
    query: '',
    isHidden: 'none',
    monsterArr: [],
    searchState: 'monster'
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

  handleSearchClick = (thingId) => {
    console.log(thingId);
    if(this.state.searchState === 'monster'){
      Axios
        .get(`/api/monsters/${thingId}`)
        .then(res => this.setState({monster: res.data,isHidden: null}))
        .catch(err => console.log(err));
    }
  }

    handleExitClick = () => {
      this.setState({isHidden: 'none'});
    };



    render(){
      return(
        <section>
          <SearchMain handleSearchClick={this.handleSearchClick}/>
          <MiddleViewer
            handleExitClick={this.handleExitClick}
            monster={this.state.monster}
            isHidden={this.state.isHidden}
          />
        </section>
      );
    }

}
export default MainControl;
