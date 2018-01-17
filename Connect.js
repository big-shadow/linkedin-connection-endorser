// ==UserScript==
// @name        Connect
// @namespace   raywinkelman@gmail.com
// @include     https://www.linkedin.com/search/results/people/*
// @version     1
// @grant       none
// ==/UserScript==

for(var x = 0; x < 10000; x += 1000){
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), x);
}

var x = 0;

// Initial injection point.
setTimeout(() => {
    var accounts = $("button:contains(Connect)");
    console.log(`Scraped ${accounts.length} button(s).`);

    function begin() {
        if(x == accounts.length){
            console.log("Complete.");
            return;
        }

        setTimeout(() => {
            connect(x);
            x++;
        }, 1750);
    }

    function connect(number) {
        var account = accounts[number];

        if(account != undefined){
            account.click();
	    console.log(`Clicked button #${number}.`);
        }

        setTimeout(() => {
            var button = $("button:contains(Send now)");

            if(button != undefined){
                button.click();
	        console.log(`Confirmed button #${number}.`);
            }

            // Re-iterate.
            setTimeout(begin, 750);
        }, 500);
    }

    begin();
}, 12500);
