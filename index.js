var url = 'https://www.momondo.fr/flightsearch?Search=true&TripType=2&SegNo=2&SO0=FRA&SD0=BKK&SDP0=14-11-2016&SO1=BKK&SD1=FRA&SDP1=21-11-2016&AD=1&TK=ECO&DO=false&NA=false';
var page = require('webpage').create();

function nowString() {
  var currentDate = new Date();
  return currentDate.toISOString();
}

page.open(url, function(status) {
  // var title = page.evaluate(function() {
  //   return document.title;
  // });
  // console.log(title);
  var waitDuration = 10;
  // console.log('Waiting', waitDuration, 'seconds...');
  if (status === "success") {
    setTimeout(function () {
      var now = nowString();
      page.render('screenshots/' + now + '.png');
      var firstPrice = page.evaluate(function() {
        var firstPriceElement = document.querySelector('.prices .price-pax .price .value');
        if (firstPriceElement) {
          return firstPriceElement.textContent;
        } else {
          return null;
        }
      });
      console.log(now + ',' + (firstPrice ? firstPrice.replace(/\W/g, '') : '0'));
      phantom.exit();
    }, waitDuration * 1000)
  }
});
