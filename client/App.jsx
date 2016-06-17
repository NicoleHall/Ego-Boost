import $ from 'jquery';
import styles from 'styles/main.scss';

import complimentGenerator from 'pages/complimentGeneratorHomepage';


$(function(){
  header.init();

  //  what page are we on?
  var url = window.location.pathname;

  //  this is the javascript router

  switch (url) {
    case '/compliments':
      complimentGeneratorHomepages.init();
      break;

  }

console.log('==========================');
console.log('==========================');
console.log('==I am looking for a job==');
console.log('==========================');
console.log('==========================');
});
