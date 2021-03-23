import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Tags from './pages/Tags';
import TagsComparison from './pages/TagsComparison';
import Games from './pages/Games';
import GamesTags from './pages/GamesTags';
import GamesComparison from './pages/GamesComparison';
import Game from './pages/Game';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tags" component={Tags} />
        <Route path="/tagscomparison" component={TagsComparison} />
        <Route path="/games" component={Games} />
        <Route path="/gamestags/:tag_name" component={GamesTags} />
        <Route path="/gamescomparison" component={GamesComparison} />
        <Route path="/game/:game_name" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}
