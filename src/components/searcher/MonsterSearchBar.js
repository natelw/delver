import React from 'react';
import { Row, Col, FormGroup, FormControl, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

const MonsterSearchBar = ({ handleSort, handleSearch, handleClassSort }) => {

  return(
    <Row>
      <Col md={6}>
        <FormGroup>
          <FormControl type="text" placeholder="Search" onChange={handleSearch}/>
        </FormGroup>
      </Col>

      <Col md={12}>
        <FormGroup>
          <FormControl componentClass="select" onChange={handleSort}>
            <option value="name|asc">Name (A - Z)</option>
            <option value="name|desc">Name (Z - A)</option>
            <option value="hit_points|asc">Hit Points (Low - High)</option>
            <option value="hit_points|desc">Hit Points (High - Low)</option>
            <option value="challenge_rating|asc">Challenge Rating(Low - High)</option>
            <option value="challenge_rating|desc">Challenge Rating (High - Low)</option>
          </FormControl>
          <ToggleButtonGroup
            type="radio"
            name="charclassoptions"
            className="class-toggles"
          >
            <ToggleButton value="" onChange={handleClassSort}>All</ToggleButton>
            <ToggleButton value="Tiny" onChange={handleClassSort}>Tiny</ToggleButton>
            <ToggleButton value="Small" onChange={handleClassSort}>Small</ToggleButton>
            <ToggleButton value="Medium" onChange={handleClassSort}>Medium</ToggleButton>
            <ToggleButton value="Large" onChange={handleClassSort}>Large</ToggleButton>
            <ToggleButton value="Huge" onChange={handleClassSort}>Huge</ToggleButton>
            <ToggleButton value="Gargantuan" onChange={handleClassSort}>Gargantuan</ToggleButton>

          </ToggleButtonGroup>
        </FormGroup>
      </Col>

    </Row>
  );
};

export default MonsterSearchBar;
