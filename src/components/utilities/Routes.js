import React from 'react';
import {Route, Switch} from 'react-router-dom';

import BigSearch from '../spells/BigSearch';



const Routes = () => {
  return (
    <Switch>

      <Route exact path="/spells" component={BigSearch} />
      <Route path="/" component={BigSearch} />
    </Switch>
  );
};

export default Routes;
