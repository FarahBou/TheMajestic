/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EventRegister from 'src/containers/EventRegister';
import Home from 'src/components/Home';
import NotFound from 'src/components/NotFound';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/enregistrement" component={EventRegister} />
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default App;
