import React from 'react';
import SearchMain from '../searcher/SearchMain';
import {Col} from 'react-bootstrap';
class LeftSidePopOut extends React.Component {
  state = {

  };




  render(){
    return(
      <Col xs={6} md={4} >
        <section>
          <div className="left-slider">
            <SearchMain
              handleSearchClick={this.props.handleSearchClick}
              searchState={this.props.searchState}
              handleSearchChange={this.props.handleSearchChange}
            />
          </div>
        </section>
      </Col>
    );
  }

}
export default LeftSidePopOut;
