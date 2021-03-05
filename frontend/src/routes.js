import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Tags from './pages/Tags';
import TagsComparison from './pages/TagsComparison';
import Games from './pages/Games';
import GamesComparison from './pages/GamesComparison';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Tags} />
        <Route path="/tagscomparison" component={TagsComparison} />
        <Route path="/games" component={Games} />
        <Route path="/gamescomparison" component={GamesComparison} />
      </Switch>
    </BrowserRouter>
  );
}
