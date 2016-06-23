var $ = require("jquery");

// legacy loading for bootstrap
window.jQuery = window.$ = $;
//  require('bootstrap');

import _ from "underscore";
//import Backbone from "html!backbone";
import Backbone from "backbone";

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
    "You are as cool as a young Barack Obama smoking a cigarette",
    "You smell nice today",
    "You the hottest bitch in this place",
    "I love your delicate fingers",
    "You're so precious I wish I could just gobble you up.",
    "You dance better than Michael Jackson",
    "According to your eBay feedback, you pay promptly and have excellent communication",
    "Your socks not only match your outfit, they match each other",
    "You inspire me to be a better golfer",
    "u aight",
    "The dentist recently told you: 'I can tell you've been flossing!'",
    "You make such interesting choices with your life",
    "If I wasn't so hammered right now I'd ask you to dance with me",
    "I'll never get tired of your bullshit",
    "Your carbon footprint is tiny and adorable",
    "You have excellent penmanship",
    "You're good at your job",
    "You sure know how to rock a tracksuit",
    "You cooked the best steak I've ever had",
    "You're lost and making it up as you go along, just like the rest of us... You're just doing a much, much better job of it",
    "Your hair is a miracle",
    "I'm proud of you son",
    "Nice bike",
    "You are a born leader",
    "You look mesmerizing",
    "I love your accent",
    "You have a knack for asking the right questions",
    "I admire your sticktoitiveness",
    "I look up to you",
    "You are as strong as an ox",
    "You have beautiful eyes",
    "Cool t-shirt",
    "Your children are so well-behaved",
    "Compassion can be a rare quality. You have it in spades",
    "You are trustworthy",
    "Are you a model?",
    "You are the only one who knows how to drive in this town",
    "I can be myself around you",
    "Your strength in tough times is an inspiration",
    "Here is a compliment from your credit card company: They said you have outstanding balance",
    "I'm positive every person you've ever known has at one point been in love with you",
    "You remind me of Roald Dahl's Matilda",
    "From this light, you somewhat resemble David Duchovny",
    "You have pretty eyes and a good singing voice",
    "You can do anything you put your mind to",
    "You're an amazing, thoughtful person",
    "You have a low tolerance for bullshit",
    "You have the body of a Greek god",
    "You seem like you have your shit together",
    "You've got mad parkour skills",
    "That's the most original tattoo I've ever seen",
    "You have very pretty feet",
    "You look like a bond girl",
    "I can always count on you for witty banter",
    "You are way better at math than most people",
    "You are a genuinely bad-ass person",
    "You have good posture",
    "Now that I've met you, all the love songs finally make sense",
    "That'll do, pig. That'll do",
    "You smell like soap",
    "Never change",
    "If everyone was like you, war wouldn't exist",
    "Your sneezes are adorable",
    "You are a person of extreme good taste",
    "You must have eaten a F5 key, because your body is refreshing",
    "Sucking at something is the first step to becoming sorta good at something",
    "You don't look like someone who studies Computer Science."
  ],

  init: function(){
    app.showACompliment();
    app.hideTheMissionStatementAfterKeypress();
  },

  showACompliment: function(){
    $(document).on("keyup", function(){
      var complimentArray = app.complimentArray;
      var randomCompliment = complimentArray[Math.floor(Math.random()*complimentArray.length)];
      $(".gimme_a_compliment").text(randomCompliment);
    });
  },

  hideTheMissionStatementAfterKeypress: function(){
    $(document).on("keyup", function(){
      $(".mission-statement").hide();
    });
  }
};
module.exports = app;
