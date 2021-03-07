import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Tags from './pages/Tags';
import TagsComparison from './pages/TagsComparison';
import Games from './pages/Games';
import GamesComparison from './pages/GamesComparison';
import Game from './pages/Game';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={["/", "/tags"]} component={Tags} />
        <Route path="/tagscomparison" component={TagsComparison} />
        <Route path="/games" component={Games} />
        <Route path="/gamescomparison" component={GamesComparison} />
        <Route path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}
