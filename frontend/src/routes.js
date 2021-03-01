import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Tags from './pages/Tags';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Tags} />
      </Switch>
    </BrowserRouter>
  );
}
