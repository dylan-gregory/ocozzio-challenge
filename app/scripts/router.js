var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var MainContainer = require('./main.jsx').MainContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'main'
  },
  main: function(){
    ReactDOM.render(
      React.createElement(MainContainer),
      document.getElementById('app')
    )
  }
});

var myRouter = new AppRouter();

module.exports = myRouter;
