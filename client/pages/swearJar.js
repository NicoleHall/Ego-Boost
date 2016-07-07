var $ = require("jquery");

// legacy loading for bootstrap
window.jQuery = window.$ = $;
//  require('bootstrap');

import _ from "underscore";
//  import Backbone from "html!backbone";
//  import Backbone from "backbone";
//  import sentiment from "sentiment";

var app = {
  init: function(){
    app.showNonComplimentToUser();
  },

  getQueryParams: function(qs){

    qs = qs.search.split("+").join(" ");

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }
    return params;
  },

  showNonComplimentToUser: function(){
    var nonCompliment = app.getQueryParams(document.location);
    $(".zomg").text(nonCompliment.compliment);
  }
};

module.exports = app;
