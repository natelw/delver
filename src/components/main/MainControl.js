import React from 'react';
import Axios from 'axios';
import RightSidePopOut from '../viewer/RightSidePopOut';
import MiddleViewer from '../viewer/MiddleViewer';
import LeftSidePopOut from '../viewer/LeftSidePopOut';
import Auth from '../../lib/Auth';

class MainControl extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      monster: {name: 'NO MONSTERS'},
      monsterID: '',
      sortBy: 'name',
      sortDirection: 'asc',
      query: '',
      isHidden: 'none',
      monsterArr: [],
      searchState: 'spell',
      players: [],
      spell: {name: 'NO SPELLS'},
      features: [],
      feature: {name: 'NO FEATURES'},
      equipment: {name: 'NO EQUIPMENT'},
      sheet: {},
      monsterInit: 1,
      campaign: {},
      monsterIdArr: [],
      mainState: 'newsheet'
    };
  }


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
      this.setState({ monsterIdArr: [...this.state.monsterIdArr, this.state.monster.id] });



      console.log(this.state.monsterIdArr);
    }

    handleAddSheetClick = () => {
      this.setState({ players: [...this.state.players, this.state.sheet]});
    }
    handleSaveBattle = () => {
      console.log(this.state.campaign);
      Axios
        .put(`/api/campaigns/${this.props.campaign.id}`, this.state.campaign,
          { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
          })
        .then(res => console.log(res))
        .catch(err => console.log(err));

    }

    handleActiveReset = () => {
      this.setState({monsterArr: []});
      this.setState({monsterIdArr: []});
      this.setState({players: []});

    }

    handleRollInitDice = () => {
      const randomD20 = Math.floor(Math.random() * 20) + 1;
      this.setState({monsterInit: randomD20});
    }

    handleRollPlayerDice = () => {
      const randomD20 = Math.floor(Math.random() * 20) + 1;
      // this.setState({monsterInit: randomD20});
      console.log(randomD20);
    }

    handleNewSheet =() => {
      this.setState({mainState: 'newsheet'});
    }

    handleHomeClick = () => {
      this.setState({mainState: 'home'});
    }

    handleCampEditClick = () => {
      this.setState({mainState: 'campaignedit'});
    }
    handleDiceRoller = () => {
      this.setState({mainState: 'diceroller'});
    }

    render(){
      return(
        <section>
          <p>{this.state.campaign.name}</p>
          <div className="leftsidepopout-box">
            <LeftSidePopOut
              handleSearchClick={this.handleSearchClick}
              searchState={this.state.searchState}
              handleSearchChange={this.handleSearchChange}
            />
          </div>
          <div className="middleviewer-box">
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
              handleAddSheetClick={this.handleAddSheetClick}
              handleNewSheet={this.handleNewSheet}
              mainState={this.state.mainState}
              handleHomeClick={this.handleHomeClick}
              campaign={this.props.campaign}
              handleCampEditClick={this.handleCampEditClick}
              handleDiceRoller={this.handleDiceRoller}
            />
          </div>
          <div className="rightsidepopout-box">
            <RightSidePopOut
              monsterArr={this.state.monsterArr}
              players={this.state.players}
              saveBattle={this.handleSaveBattle}
              handleSearchClick={this.handleSearchClick}
              handleSaveBattle={this.handleSaveBattle}
              handleActiveReset={this.handleActiveReset}
              handleRollInitDice={this.handleRollInitDice}
              monsterInit={this.state.monsterInit}
              handleRollPlayerDice={this.handleRollPlayerDice}
            />
          </div>

        </section>
      );
    }

}
export default MainControl;
