var $ = require('jquery');

//  legacy loading for bootstrap for es5
window.jQuery = window.$ = $;
require('bootstrap');

import styles from "styles/main.scss";

import complimentGeneratorHomepage from "pages/complimentGeneratorHomepage";
import donate from "pages/donate";

$(function(){
  //  what page are we on?
  var url = window.location.pathname;

  //  this is the javascript router
  switch (url) {
    case "/pages/complimentGenerator.html":
      complimentGeneratorHomepage.init();
      break;
    case "/pages/donate.html":
      donate.init();
      break;
  }

});
