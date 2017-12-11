import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import FeatureBox from './FeatureBox';
import FeaturesSearchBar from './FeaturesSearchBar';

class FeaturesBigSearch extends React.Component {
  state = {
    features: [],
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
      .get('/api/features')
      .then(res => this.setState({features: res.data}))
      .catch(err => console.log(err));
  }

  FeatureSearchSorter(){
    const { sortBy, sortDirection, query, classQuery } = this.state;
    const regex = new RegExp(query, 'i');
    const classRegex = new RegExp(classQuery, 'i');
    const orderedFeatures = _.orderBy(this.state.features, [sortBy],[sortDirection]);
    const categoryFeatures = _.filter(orderedFeatures, (feature) =>{
      return classRegex.test(feature.class.name);
    });
    const features = _.filter(categoryFeatures, (feature) => {
      return regex.test(feature.name);
    });
    return features;
  }



  render(){
    const features = this.FeatureSearchSorter();
    return(
      <section>
        <h3>All Features</h3>
        <div className="search-main-box">
          <FeaturesSearchBar
            handleSort={this.handleSort}
            handleSearch={this.handleSearch}
            handleClassSort={this.handleClassSort}
          />

          <div className="search-container">
            {features.map(feature => <Link key={feature.id} to={`/equipments/${feature.id}`}><FeatureBox {...feature} /></Link>)}
          </div>
        </div>

        <div className="features-sheet-viewer">
        </div>
      </section>
    );
  }

}
export default FeaturesBigSearch;
