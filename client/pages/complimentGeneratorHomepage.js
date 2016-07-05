var $ = require("jquery");

// legacy loading for bootstrap
window.jQuery = window.$ = $;
//  require('bootstrap');

import _ from "underscore";
//import Backbone from "html!backbone";
import Backbone from "backbone";
import sentiment from "sentiment";

var app = {

  init: function(){
    app.showACompliment();
    app.hideTheMissionStatementAfterKeypress();
    app.userCanSubmitACompliment();
    app.deleteACompliment();
  },

  userCanSubmitACompliment: function(){
    $("#add-compliment").on("click", function(event){
      event.preventDefault();
      var compliment = $("input[name='compliment']").val();
      if (compliment.length <= 0) {
        $("#validation").html("Invalid Entry");
      } else {
        $.ajax({
          url: "/compliment",
          method: "POST",
          data: {postData: compliment},
          success: function(res){
            var message = res.message;
            $("#validation").html(message);
            $("#validation").show();
            $("input[name='compliment']").val("");
          }
        });
        $("#ego-boost-button").on("click", function(){
          $("#validation").hide();
        });
        var sentiment = require("sentiment");
        var r1 = sentiment(compliment);
        if (r1.score < 0 ) {
          app.hurtFeelings();
        }
      }
    });
  },

  hurtFeelings: function(){
    var compliment = $("input[name='compliment']").val();
    $.ajax({
      url: "/swearJar",
      method: "GET",
      success: function(res){
        var message = res.message
        $(".hurt-feelings").text(message);
      }
    });
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
          var message = res.message;
          $(".delete-message").text(message);
          $(".delete-message").show();
        }
      });
    });
    $("#ego-boost-button").on("click", function(){
      $(".delete-message").hide();
    });
  }

};
module.exports = app;
