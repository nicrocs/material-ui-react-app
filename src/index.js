// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { muiTheme } from './constants';
import Routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Routes history={browserHistory} />
  </MuiThemeProvider>,
  document.getElementById('root')
);
