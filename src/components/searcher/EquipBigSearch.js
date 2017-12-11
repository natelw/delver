import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import EquipBox from './EquipBox';
import EquipSearchBar from './EquipSearchBar';

class EquipBigSearch extends React.Component {
  state = {
    equipments: [],
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
      .get('/api/equipments')
      .then(res => this.setState({equipments: res.data}))
      .catch(err => console.log(err));
  }

  EquipSearchSorter(){
    const { sortBy, sortDirection, query, classQuery } = this.state;
    const regex = new RegExp(query, 'i');
    const classRegex = new RegExp(classQuery, 'i');
    const orderedEquipments = _.orderBy(this.state.equipments, [sortBy],[sortDirection]);
    const categoryEquips = _.filter(orderedEquipments, (equipment) =>{
      return classRegex.test(equipment.equipment_category);
    });
    const equipments = _.filter(categoryEquips, (equipment) => {
      return regex.test(equipment.name);
    });
    return equipments;
  }



  render(){
    const equipments = this.EquipSearchSorter();
    return(
      <section>
        <h3>All Equipment</h3>
        <div className="search-main-box">
          <EquipSearchBar
            handleSort={this.handleSort}
            handleSearch={this.handleSearch}
            handleClassSort={this.handleClassSort}
          />

          <div className="search-container">
            {equipments.map(equipment => <Link key={equipment.id} to={`/equipments/${equipment.id}`}><EquipBox {...equipment} /></Link>)}
          </div>
        </div>

        <div className="equip-sheet-viewer">
        </div>
      </section>
    );
  }

}
export default EquipBigSearch;
