// server/app.js
require('es6-promise').polyfill();
require('isomorphic-fetch');

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));


var loginOptions = {
  url: "https://pr-448_phy_bkon-connect.ci.bkon.com/api/v2/login",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: {
	   "email": "testing.demo@phy.net",
     "password": "testing.demo"
  },
  json: true
}

function getBeaconsOptions(token) {
  return {
    url: "https://pr-448_phy_bkon-connect.ci.bkon.com/api/v2/beacons/",
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU2MiwiaWF0IjoxNDc1Nzk5MTY3LCJleHAiOjE0NzU5NzE5Njd9.LhN1uwWUQdZVzmwZ2Fl1IP7LZPPZL14v0OFrxAHTz3o",
      "Content-Type": "application/json",
    }
  }
};

function callback(response) {
  //console.log(response.toJSON());
};

request.post(loginOptions).on('response', callback);

app.get('/api/beacons', (req, res) => {
  request(getBeaconsOptions()).pipe(res);
});

app.post('/api/beacons/:id', (req, res) => {
  console.log(req);
  // request.post(getBeaconsOptions().url + req.params.id, getBeaconsOptions().headers, req.body).pipe(res)
})

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
