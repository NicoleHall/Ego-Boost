var $ = require("jquery");

// legacy loading for bootstrap
window.jQuery = window.$ = $;
//  require('bootstrap');

import _ from "underscore";
//import Backbone from "html!backbone";
import Backbone from "backbone";

var app = {

  init: function(){
    app.showACompliment();
    app.hideTheMissionStatementAfterKeypress();
    app.userCanSubmitACompliment();
  },

  userCanSubmitACompliment: function(){
    $("#add-compliment").on('click', function(event){
      event.preventDefault();
      var compliment = $("input[name='compliment']").val();
      if (compliment.length <= 0) {
        $("#validation").html("Invalid Entry")
      } else {
        $.ajax({
          url: "/compliment",
          method: "POST",
          data: {postData: compliment},
          success: function(res){
            var message = res.message;
            $("#validation").html(message);
          }
        })
      }
    })
  },

  showACompliment: function(){
    $("#ego-boost-button").on("click", function(){
      console.log("hello world");
      $.ajax({
        url: "/compliment",
        method: "GET",
        success: function(randomCompliment){
          $(".gimme_a_compliment").text(randomCompliment);
        }
      });
    });
  },

  hideTheMissionStatementAfterKeypress: function(){
    $("#ego-boost-button").on("click", function(){
      $(".mission-statement").hide();
    });
  }
};
module.exports = app;
