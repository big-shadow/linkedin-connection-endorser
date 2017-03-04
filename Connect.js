// ==UserScript==
// @name        Connect
// @namespace   raywinkelman@gmail.com
// @include     https://www.linkedin.com/search/results/people/*
// @version     1
// @grant       none
// ==/UserScript==

setTimeout(function() {
  var accounts = $("button:contains(Connect)");
  var x = 0;

  function begin() {
    if(x == accounts.length){
      console.log("Complete.");
      return;
    }

    setTimeout(function() {
      connect(x);
      x++;
    }, 1000);
  }

  function connect(number) {
    var account = accounts[number];

    if(account != undefined){
      account.click();
    }

    setTimeout(function() {
        var button = $("button:contains(Send now)");

        if(button != undefined){
          button.click();
        }
    }, 500);

    setTimeout(function() {
        begin();
    }, 750);
  }

  begin();
}, 5000);
