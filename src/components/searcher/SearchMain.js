import React from 'react';
import Axios from 'axios';
import _ from 'lodash';
import MonsterBox from './MonsterBox';
import MonsterSearchBar from './MonsterSearchBar';
import {Col, NavItem, Nav} from 'react-bootstrap';
import SearchBar from '../searcher/SearchBar';
import Spellbox from '../searcher/Spellbox';
import FeaturesSearchBar from '../searcher/FeaturesSearchBar';
import FeatureBox from '../searcher/FeatureBox';
import EquipSearchBar from '../searcher/EquipSearchBar';
import EquipBox from '../searcher/EquipBox';
import SheetBox from '../searcher/SheetBox';
import SheetSearchBar from '../searcher/SheetSearchBar';

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
    spells: [],
    features: [],
    equipments: [],
    sheets: []
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

    Axios
      .get('/api/features')
      .then(res => this.setState({features: res.data}))
      .catch(err => console.log(err));
    Axios
      .get('/api/equipments')
      .then(res => this.setState({equipments: res.data}))
      .catch(err => console.log(err));
    Axios
      .get('/api/sheets')
      .then(res => this.setState({sheets: res.data}))
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
    }else if(this.props.searchState === 'feature'){
      const orderedFeatures = _.orderBy(this.state.features, [sortBy],[sortDirection]);
      const categoryFeatures = _.filter(orderedFeatures, (feature) =>{
        return classRegex.test(feature.class.name);
      });
      const features = _.filter(categoryFeatures, (feature) => {
        return regex.test(feature.name);
      });
      return features;
    }else if(this.props.searchState === 'equipment'){
      const orderedEquipments = _.orderBy(this.state.equipments, [sortBy],[sortDirection]);
      const categoryEquips = _.filter(orderedEquipments, (equipment) =>{
        return classRegex.test(equipment.equipment_category);
      });
      const equipments = _.filter(categoryEquips, (equipment) => {
        return regex.test(equipment.name);
      });
      return equipments;
    }else if(this.props.searchState === 'sheet'){
      const orderedSheets = _.orderBy(this.state.sheets, [sortBy],[sortDirection]);
      const classedSheets = _.filter(orderedSheets, (sheet) =>{
        return classRegex.test(sheet.charclass);
      });
      const sheets = _.filter(classedSheets, (sheet) => {
        return regex.test(sheet.name);
      });
      return sheets;
    }
  }

  handleSearchType = (type) => {
    this.props.handleSearchChange.bind(this, type);
    console.log(type);
  }



  render(){
    const monsters = this.SearchSorter();
    const spells = this.SearchSorter();
    const features = this.SearchSorter();
    const equipments = this.SearchSorter();
    const sheets = this.SearchSorter();

    return(
      <section>
        <Col md={4}>
          <div className="button-search-switcher">
            <br />
            <Nav bsStyle="pills" justified>
              <NavItem onClick={this.props.handleSearchChange.bind(this, 'monster')}>Monsters</NavItem>
              <NavItem onClick={this.props.handleSearchChange.bind(this, 'spell')}>Spells</NavItem>
              <NavItem onClick={this.props.handleSearchChange.bind(this, 'feature')}>Features</NavItem>
              <NavItem onClick={this.props.handleSearchChange.bind(this, 'equipment')}>Equipment</NavItem>
              <NavItem onClick={this.props.handleSearchChange.bind(this, 'sheet')}>Sheets</NavItem>
            </Nav>
            {/* <button onClick={this.props.handleSearchChange.bind(this, 'monster')}>monsters</button>
            <button onClick={this.props.handleSearchChange.bind(this, 'spell')}>spells</button>
            <button onClick={this.props.handleSearchChange.bind(this, 'feature')}>features</button>
            <button onClick={this.props.handleSearchChange.bind(this, 'equipment')}>equipment</button>
            <button onClick={this.props.handleSearchChange.bind(this, 'sheet')}>My Sheets</button> */}

          </div>

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
        </div>
          }{this.props.searchState === 'feature' &&
              <div className="search-main-box">
                <FeaturesSearchBar
                  handleSort={this.handleSort}
                  handleSearch={this.handleSearch}
                  handleClassSort={this.handleClassSort}
                />
                <div className="search-container">
                  {features.map(feature =>
                    <a className='feature-link' href='#' key={'feafea' + feature.id} data-id={feature.id}
                      onClick={this.props.handleSearchClick.bind(this, feature.id)}>
                      <FeatureBox {...feature} /></a>
                  )}
                </div>
              </div>

          }{this.props.searchState === 'equipment' &&
              <div className="search-main-box">
                <EquipSearchBar
                  handleSort={this.handleSort}
                  handleSearch={this.handleSearch}
                  handleClassSort={this.handleClassSort}
                />
                <div className="search-container">
                  {equipments.map(equipment =>
                    <a className='feature-link' href='#' key={'equequ' + equipment.id} data-id={equipment.id}
                      onClick={this.props.handleSearchClick.bind(this, equipment.id)}>
                      <EquipBox {...equipment} /></a>
                  )}
                </div>
              </div>
          }{this.props.searchState === 'sheet' &&
              <div className="search-main-box">
                <SheetSearchBar
                  handleSort={this.handleSort}
                  handleSearch={this.handleSearch}
                  handleClassSort={this.handleClassSort}
                />
                <div className="search-container">
                  {sheets.map(sheet =>
                    <a className='sheet-link' href='#' key={'sheshe' + sheet.id} data-id={sheet.id}
                      onClick={this.props.handleSearchClick.bind(this, sheet.id)}>
                      <SheetBox {...sheet} /></a>
                  )}
                </div>
              </div>
          }
        </Col>
      </section>
    );
  }

}
export default SearchMain;
