var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
//  require('bootstrap');

import _ from 'underscore';
import Backbone from 'html!backbone';

var app = {
  init: function(){
    app.render;
  },
  render: function(){

  }
};


module.exports = app;
