import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Principal from './pages/Principal';
import List from './pages/List';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Principal} />
        <Route path="/List" component = {List} />
      </Switch>
    </BrowserRouter>
  );
}

