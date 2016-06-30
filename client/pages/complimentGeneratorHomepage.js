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
    app.deleteACompliment();
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
            $("input[name='compliment']").val("");
          }
        })
      }
    })
  },

  showACompliment: function(){
    $("#ego-boost-button").on("click", function(){
      $.ajax({
        url: "/compliment",
        method: "GET",
        success: function(returnObject){

          $(".gimme_a_compliment").text(returnObject.message);
          $(".index").text(returnObject.index);
        }
      });
    });
  },

  hideTheMissionStatementAfterKeypress: function(){
    $("#ego-boost-button").on("click", function(){
      $(".mission-statement").hide();
    });
  },

  deleteACompliment: function(){
    $(".delete").on("click", function(){
      $.ajax({
        url: "/compliment",
        method: "DELETE",
        data: {index: $(".index").text()},
        success: function(res){
          $(".delete-message").text(res.message);
          $(".gimme_a_compliment").text("");
          $(".delete-message").text("");
        }
      })
    })
  }
};
module.exports = app;
