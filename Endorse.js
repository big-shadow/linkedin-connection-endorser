// ==UserScript==
// @name        Endorse
// @namespace   LinkedIN
// @include     https://www.linkedin.com/in/*
// @version     1
// @grant       none
// ==/UserScript==

setTimeout(function(){
for(var x = 0; x < 9000; x += 500){
  setTimeout(function(){
      window.scrollTo(0,document.body.scrollHeight);
  }, x);
}

}, 5000);

setTimeout(function(){
    $("button[aria-controls='featured-skills-expanded']").click();

    $("path[d='M21,13H13v8H11V13H3V11h8V3h2v8h8v2Z']").each(function(x, e) {

          if(x < 40)
          {
              $(e).click();
          }
          else {
              return;
          }
    });

}, 17500);
