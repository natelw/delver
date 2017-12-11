import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../Home';
import BigSearch from '../searcher/BigSearch';
import SheetsIndex from '../sheets/SheetsIndex';
import SheetsShow from '../sheets/SheetsShow';
import SheetsNew from '../sheets/SheetsNew';
import SheetsEdit from '../sheets/SheetsEdit';
import UsersShow from '../users/UsersShow';
import UsersEdit from '../users/UsersEdit';
import SpellSheet from '../searcher/SpellSheet';
import Login from '../auth/Login';
import Register from '../auth/Register';
import CampaignsIndex from '../campaigns/CampaignsIndex';
import CampaignsNew from '../campaigns/CampaignsNew';
import CampaignsShow from '../campaigns/CampaignsShow';
import CampaignsEdit from '../campaigns/CampaignsEdit';
import EquipBigSearch from '../searcher/EquipBigSearch';
const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/spells" component={BigSearch} />
      <Route exact path="/equipments" component={EquipBigSearch} />
      <Route exact path="/sheets" component={SheetsIndex} />
      <Route exact path="/sheets/new" component={SheetsNew} />
      <Route exact path ="/campaigns" component={CampaignsIndex} />
      <Route exact path ="/campaigns/new" component={CampaignsNew} />
      <Route path="/users/:id/edit" component={UsersEdit} />
      <Route path="/users/:id" component={UsersShow} />
      <Route path="/sheets/:id/edit" component={SheetsEdit} />
      <Route path="/sheets/:id" component={SheetsShow} />
      <Route path="/spells/:id" component={SpellSheet} />
      <Route path ="/campaigns/:id/edit" component={CampaignsEdit} />
      <Route path ="/campaigns/:id" component={CampaignsShow} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
