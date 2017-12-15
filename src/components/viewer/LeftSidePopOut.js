import React from 'react';
import SearchMain from '../searcher/SearchMain';
class LeftSidePopOut extends React.Component {
  state = {

  };




  render(){
    return(
      <section>
        <div className="left-slider">
          <SearchMain
            handleSearchClick={this.props.handleSearchClick}
            searchState={this.props.searchState}
            handleSearchChange={this.props.handleSearchChange}
          />
        </div>
      </section>
    );
  }

}
export default LeftSidePopOut;
