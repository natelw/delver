import React from 'react';
import { Row, Col, FormGroup, FormControl, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

const SearchBar = ({ handleSort, handleSearch, handleClassSort }) => {

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
          </FormControl>
          <ToggleButtonGroup
            type="radio"
            name="equipmentoptions"
            className="equipment-toggles"
          >
            <ToggleButton value="" >All Equipment</ToggleButton>
            <ToggleButton value="Weapon" onChange={handleClassSort}>Weapon</ToggleButton>
            <ToggleButton value="Armor" onChange={handleClassSort}>Armor</ToggleButton>
            <ToggleButton value="Adventuring Gear" onChange={handleClassSort}>Adventuring Gear</ToggleButton>
            <ToggleButton value="Tools" onChange={handleClassSort}>Tools</ToggleButton>
            <ToggleButton value="Mounts and Vehicles" onChange={handleClassSort}>Mounts and Vehicles</ToggleButton>

          </ToggleButtonGroup>
        </FormGroup>
      </Col>

    </Row>
  );
};

export default SearchBar;
