Error.stackTraceLimit = Infinity;

for(var x = 0; x < 89000; x += 500){
  setTimeout(() => window.scrollTo(0,document.body.scrollHeight), x);
}

setTimeout(() => {
    $(".mn-person-info__link").each((x, e) => console.log(e.href))
}, 90000);