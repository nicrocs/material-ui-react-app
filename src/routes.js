// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './containers/App';
import Beacons from './containers/Beacons';
import NotFound from './containers/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/beacons" component={Beacons} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
