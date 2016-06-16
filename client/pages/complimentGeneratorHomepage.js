var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Backbone from 'backbone';

var app = {
  init: function(){
    var complimentGenerator = Backbone.View.extend({})
  };
}


module.exports = app;
