import React from 'react';
import Axios from 'axios';
import RightSidePopOut from '../viewer/RightSidePopOut';
import MiddleViewer from '../viewer/MiddleViewer';
import LeftSidePopOut from '../viewer/LeftSidePopOut';
import CampaignNavBar from '../navigation/CampaignNavBar';
import Auth from '../../lib/Auth';

class MainControl extends React.Component {
  constructor(props){
    super(props);
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
      mainState: 'home'
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
    const resource = this.state.searchState;
    Axios
      .get(`/api/${resource}s/${thingId}`)
      .then(res => this.setState({ [resource]: res.data,isHidden: null }))
      .catch(err => console.log(err));
  }

    handleExitClick = () => {
      this.setState({isHidden: 'none'});
    };

    handleAddMonsterClick = () => {

      this.setState({
        monsterArr: [...this.state.monsterArr, this.state.monster],
        monsterIdArr: [...this.state.monsterIdArr, this.state.monster.id]
      }, () => {
        Axios
          .put(`/api/campaigns/${this.props.campaign.id}`, { monsters: this.state.monsterIdArr })
          .catch(err => console.log(err));
      });
    }

    handleAddSheetClick = () => {
      this.setState({ players: [...this.state.players, this.state.sheet]});
    }

    handleActiveReset = () => {
      this.setState({
        monsterArr: [],
        monsterIdArr: []
      }, () => {
        Axios
          .put(`/api/campaigns/${this.props.campaign.id}`, { monsters: [] })
          .catch(err => console.log(err));
      });

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
    handleEditSheetClick = () => {
      this.setState({mainState: 'editsheet',isHidden: 'none'});
      console.log('whatsssssss');
    }

    render(){
      return(
        <section>
          <CampaignNavBar
            campaign={this.props.campaign}
            deleteCampaign={this.props.deleteCampaign}
            handleHomeClick={this.handleHomeClick}
            handleCampEditClick={this.handleCampEditClick}
            handleNewSheet={this.handleNewSheet}
            handleDiceRoller={this.handleDiceRoller}
          />
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
              mainState={this.state.mainState}
              campaign={this.props.campaign}
              handleDiceRoller={this.handleDiceRoller}
              handleEditSheetClick={this.handleEditSheetClick}
            />
          </div>
          <div className="rightsidepopout-box">
            <RightSidePopOut
              monsterArr={this.state.monsterArr}
              players={this.state.players}
              saveBattle={this.handleSaveBattle}
              handleSearchClick={this.handleSearchClick}
              handleActiveReset={this.handleActiveReset}
              handleRollInitDice={this.handleRollInitDice}
              monsterInit={this.state.monsterInit}
              handleRollPlayerDice={this.handleRollPlayerDice}
              campaign={this.props.campaign}
            />
          </div>

        </section>
      );
    }

}
export default MainControl;
