// ==UserScript==
// @name        Endorse
// @namespace   LinkedIN
// @include     https://www.linkedin.com/in/*
// @version     1
// @grant       none
// ==/UserScript==

setTimeout(() => {
    for(var x = 0; x < 9000; x += 1000){
        setTimeout(() => {window.scrollTo(0,document.body.scrollHeight);}, x);
    }
}, 15000);

setTimeout(() => {
    $("button[data-control-name='skill_details']").click();
    $("button[data-control-name='endorse']").each((x, e) => {
          if(x < 40){$(e).click();}
          else {return;}
    });
}, 20000);
