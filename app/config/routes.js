
var React = require("react");
var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashRecords = router.hashRecords;

var IndexRoute = router.IndexRoute;

var Search = require("../components/search");
var Results = require("../components/results");
var Records = require("../components/records");

module.exports = (

  <Router records={hashRecords}>
    <Route path="/" component={Search}>

      <Route path="results" component={Results} />
      <Route path="records" component={Records} />

      <IndexRoute component={Search} />

    </Route>
  </Router>

);
