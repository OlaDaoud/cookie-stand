/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locations = [];
// eslint-disable-next-line no-redeclare
var sumCookiesPerHour = [];
function Location(locationName, minCust, maxCust, avgCookiesSale) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesSale = avgCookiesSale;
  this.NumOfCookiesPerHourArr = [];
  this.totalNumOfCookies = 0;
  this.custPerHour = [];
  // this.sumCookiesPerHour = [];
  locations.push(this);

}
Location.prototype.calcRandomCustPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var randCust = calcRandomNumber(this.minCust, this.maxCust);
    this.custPerHour.push(randCust);
  }
};
Location.prototype.calcNumOfCookies = function () {
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(this.custPerHour[i] * this.avgCookiesSale);
    this.NumOfCookiesPerHourArr.push(cookiesPerHour);
    this.totalNumOfCookies += cookiesPerHour;
    console.log(this.totalNumOfCookies);
  }
};
// Location.prototype.render
function render() {
  var location = document.getElementById('location');
  var articleE1 = document.createElement('article');
  location.appendChild(articleE1);
  var pE1 = document.createElement('p');
  articleE1.appendChild(pE1);
  pE1.textContent = 'Salmon Cookies';
  var tableE1 = document.createElement('table');
  articleE1.appendChild(tableE1);
  var trE1 = document.createElement('tr');
  tableE1.appendChild(trE1);
  var thE1 = document.createElement('th');
  trE1.appendChild(thE1);
  thE1.textContent = 'locations';
  for (var i = 0; i < hours.length; i++) {
    var thE = document.createElement('th');
    trE1.appendChild(thE);
    thE.textContent = hours[i];
  }
  var thE2 = document.createElement('th');
  trE1.appendChild(thE2);
  thE2.textContent = 'Daily Location Total';

  for (var e = 0; e < locations.length; e++) {
    var trE2 = document.createElement('tr');
    tableE1.appendChild(trE2);
    var tdE = document.createElement('td');
    trE2.appendChild(tdE);
    tdE.textContent = locations[e].locationName;
    // sumCookiesPerHour.push(locations[e].NumOfCookiesPerHourArr[e]);
    // console.log (sumCookiesPerHour);
    for (var a = 0; a < hours.length; a++) {
      var tdE1 = document.createElement('td');
      trE2.appendChild(tdE1);
      tdE1.textContent = locations[e].NumOfCookiesPerHourArr[a];
    }
    var tdE2 = document.createElement('td');
    trE2.appendChild(tdE2);
    tdE2.textContent = locations[e].totalNumOfCookies;
  }
}


var seattle = new Location('Seattle', 23, 65, 6.3);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
var dubai = new Location('Dubai', 38, 11, 3.7);
var paris = new Location('Paris', 20, 38, 2.3);
var lima = new Location('Lima', 2, 16, 4.6);


for (var j = 0; j < locations.length; j++) {
  locations[j].calcRandomCustPerHour();
  locations[j].calcNumOfCookies();
  console.log(locations[j]);
}
render();

// HELPER FUNCTIONS
function calcRandomNumber(min, max) {
  var rand = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(rand);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
