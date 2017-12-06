import React from 'react';
import {Route, Switch} from 'react-router-dom';

import SpellsSearch from '../spells/SpellsSearch';



const Routes = () => {
  return (
    <Switch>

      <Route exact path="/spells" component={SpellsSearch} />
      <Route path="/" component={SpellsSearch} />
    </Switch>
  );
};

export default Routes;
