import React from 'react';
import Axios from 'axios';
import RightSidePopOut from '../viewer/RightSidePopOut';
import MiddleViewer from '../viewer/MiddleViewer';
import LeftSidePopOut from '../viewer/LeftSidePopOut';
import Auth from '../../lib/Auth';

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
    spell: {name: 'NO SPELLS'},
    features: [],
    feature: {name: 'NO FEATURES'},
    equipment: {name: 'NO EQUIPMENT'},
    sheet: {}

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
        .catch(err => console.log(err));
    }else if(this.state.searchState === 'feature'){
      Axios
        .get(`/api/features/${thingId}`)
        .then(res => this.setState({feature: res.data,isHidden: null}))
        .catch(err => console.log(err));
    }else if(this.state.searchState === 'equipment'){
      Axios
        .get(`/api/equipments/${thingId}`)
        .then(res => this.setState({equipment: res.data,isHidden: null}))
        .catch(err => console.log(err));
    }else if(this.state.searchState === 'sheet'){
      Axios
        .get(`/api/sheets/${thingId}`)
        .then(res => this.setState({sheet: res.data,isHidden: null}))
        .catch(err => console.log(err));
    }
  }

    handleExitClick = () => {
      this.setState({isHidden: 'none'});
    };

    handleAddMonsterClick = () => {
      this.setState({ monsterArr: [...this.state.monsterArr, this.state.monster] });
    }

    handleSaveBattle = () => {
      console.log('hi');
      // Axios
      //   .put(`/api/campaigns/${this.props.match.params.id}`, this.state.campaign, {
      //     headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      //   })
      //   .then(res => this.props.history.push(`/campaigns/${res.data.id}`))
      //   .catch(err => console.log(err));

    }

    render(){
      return(
        <section>
          <LeftSidePopOut
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
            feature={this.state.feature}
            equipment={this.state.equipment}
            sheet = {this.state.sheet}
          />
          <RightSidePopOut
            monsterArr={this.state.monsterArr}
            players={this.state.players}
            saveBattle={this.handleSaveBattle}
            handleSearchClick={this.handleSearchClick}
            handleSaveBattle={this.handleSaveBattle}
          />
        </section>
      );
    }

}
export default MainControl;
