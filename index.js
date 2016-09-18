var url = 'https://www.momondo.fr/flightsearch?Search=true&TripType=2&SegNo=2&SO0=CDG&SD0=HND&SDP0=12-10-2016&SO1=HND&SD1=CDG&SDP1=14-10-2016&AD=1&TK=ECO&DO=false&NA=false';
var page = require('webpage').create();

page.open(url, function(status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log(title);
  const waitDuration = 10;
  console.log('Waiting', waitDuration, 'seconds...');
  if (status === "success") {
    setTimeout(function () {
      page.render('screenshot.png');
      var firstPrice = page.evaluate(function() {
        var firstPriceElement = document.querySelector('.prices .price-pax .price .value');
        if (firstPriceElement) {
          return firstPriceElement.textContent;
        } else {
          return null;
        }
      });
      if (firstPrice) {
        console.log('First price:', firstPrice);
      } else {
        console.log('First price not found');
      }
      phantom.exit();
    }, waitDuration * 1000)
  }
});
