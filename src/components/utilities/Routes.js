import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../Home';
import BigSearch from '../searcher/BigSearch';
import SheetsIndex from '../sheets/SheetsIndex';
import SheetsShow from '../sheets/SheetsShow';
import SheetsNew from '../sheets/SheetsNew';
import SheetsEdit from '../sheets/SheetsEdit';
import Login from '../auth/Login';
import Register from '../auth/Register';


const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/spells" component={BigSearch} />
      <Route exact path="/sheets" component={SheetsIndex} />
      <Route exact path="/sheets/new" component={SheetsNew} />
      <Route path = "/sheets/:id/edit" component={SheetsEdit} />
      <Route path = "/sheets/:id" component={SheetsShow} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
