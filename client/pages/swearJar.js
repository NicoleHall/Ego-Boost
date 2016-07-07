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
    app.sadFaceDesign();
    app.backButton();
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
  },

  sadFaceDesign: function(){
    var world = document.getElementById("monster-world");
    var monster = document.getElementById("little-monster");
    monster.addEventListener("click", function() {
      if (world.className.match("omg-clicked")) {
        world.className = "";
        document.body.style.backgroundColor = "#6C6386";
      } else {
        world.className += "omg-clicked";
      }
    });
  },

  backButton: function(){
    $("button.angry-button").on("click", function(){
      window.location = "complimentGenerator.html";
    });
  }
};

module.exports = app;
