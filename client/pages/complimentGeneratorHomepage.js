var $ = require("jquery");

// legacy loading for bootstrap
window.jQuery = window.$ = $;
//  require('bootstrap');

import _ from "underscore";
import Backbone from "html!backbone";

var app = {
  complimentArray: [
    "You're a good man Charlie Brown",
    "That wasn’t half bad",
    "Its nice that you chew with your mouth closed",
    "You're more talented than you realize",
    "I like going to the movies with you because you have good taste and you share your popcorn",
    "If you were a Simpson’s character, you’d be Lisa",
    "You are brave",
    "It's more fun when you come along",
    "You MUST give me your recipe",
    "Good idea!",
    "Keep the faith!",
    "You keep your car so much cleaner than I do",
    "Have you lost weight?",
    "I bet you read a lot of books",
    "Every time I meet one of your friends, I’m impressed by the company you keep",
    "I’ve learned so much from you",
    "I’m so jealous of all the travel you’ve done",
    "If this isn't nice, I don't know what is",
    "You're like sunshine on a rainy day",
    "You bring out the best in other people",
    "Your ability to recall random factoids at just the right times is impressive",
    "Your eyebrows are on fleek",
    "When you sing karaoke, everyone vociferously requests encore performances",
    "If you were running for president, I would vote for you",
    "Your recent order has shipped",
    "You are the only person I trust to work on my Harley",
    "The Beatle's song 'Here Comes The Sun' reminds me of you",
    "You are kind to your family and your family appreciates your kindness",
    "You must do the thing you think you cannot do",
    "You have a good eye for design",
    "You don't look like someone who studies Computer Science",
    "You have very nice bone structure",
    "I believe in you",
    "Look how far you've come!",
    "You catch on quickly",
    "You are as cool as a young Barack Obama smoking a cigarette"
  ],

  init: function(){
    app.showACompliment();
  },

  showACompliment: function(){
    $(document).on("keydown", function(event){
      var code = event.keyCode;
      if (code === 81) {
        $(".gimme_a_compliment").text(app.complimentArray[0]);
      }
    });
  }
};
module.exports = app;
