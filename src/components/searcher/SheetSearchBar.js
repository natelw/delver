import React from 'react';
import { Row, Col, FormGroup, FormControl, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

const SheetSearchBar = ({ handleSort, handleSearch, handleClassSort }) => {

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
            <option value="level|asc">Character Level (Low - High)</option>
            <option value="level|desc">Character Level (High - Low)</option>
          </FormControl>
          <ToggleButtonGroup
            type="radio"
            name="charclassoptions"
            className="class-toggles"
          >
            <ToggleButton value="" onChange={handleClassSort}>All Classes</ToggleButton>
            <ToggleButton value="Bard" onChange={handleClassSort}>Bard</ToggleButton>
            <ToggleButton value="Druid" onChange={handleClassSort}>Druid</ToggleButton>
            <ToggleButton value="Paladin" onChange={handleClassSort}>Paladin</ToggleButton>
            <ToggleButton value="Ranger" onChange={handleClassSort}>Ranger</ToggleButton>
            <ToggleButton value="Sorcerer" onChange={handleClassSort}>Sorcerer</ToggleButton>
            <ToggleButton value="Warlock" onChange={handleClassSort}>Warlock</ToggleButton>
            <ToggleButton value="Wizard" onChange={handleClassSort}>Wizard</ToggleButton>
            <ToggleButton value="Monk" onChange={handleClassSort}>Monk</ToggleButton>
            <ToggleButton value="Rogue" onChange={handleClassSort}>Rogue</ToggleButton>
            <ToggleButton value="Fighter" onChange={handleClassSort}>Fighter</ToggleButton>
            <ToggleButton value="Barbarian" onChange={handleClassSort}>Barbarian</ToggleButton>

          </ToggleButtonGroup>
        </FormGroup>
      </Col>

    </Row>
  );
};

export default SheetSearchBar;
