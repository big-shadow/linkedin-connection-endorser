for(var x = 0; x < 59000; x += 500){
  setTimeout(function(){
      window.scrollTo(0,document.body.scrollHeight);
  }, x);
}

setTimeout(function(){
  $("a[data-control-name='profile']").each(function(x, e) {
    if(x % 2 == 0){
        console.log(e.href);
    }
  });
}, 60000);
