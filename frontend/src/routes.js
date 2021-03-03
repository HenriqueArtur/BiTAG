import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Tags from './pages/Tags';
import TagsComparison from './pages/TagsComparison';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Tags} />
        <Route path="/tagscomparison" component={TagsComparison} />
      </Switch>
    </BrowserRouter>
  );
}
