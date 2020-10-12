'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  location: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesSale: 6.3,
  NumOfCookiesPerHourArr: [], // empty array to store the num of cookies later
  totalNumOfCookies: 0,
  custPerHour: [],
  calcRandomCustPerHour: function () {

    for (var i = 0; i < hours.length; i++) {
      var randCust = calcRandomNumber(this.minCust, this.maxCust);
      this.custPerHour.push(randCust);
    }
  },
  calcNumOfCookies: function () {
    for (var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.floor(this.custPerHour[i] * this.avgCookiesSale);
      this.NumOfCookiesPerHourArr.push(cookiesPerHour);
      this.totalNumOfCookies += cookiesPerHour;
    }

  },

  render: function () {
    var location = document.getElementById('location');
    console.log(location);

    var locationShop = document.createElement('p');
    location.appendChild(locationShop);
    locationShop.textContent = this.shopName;

    var ulE1 = document.createElement('ul');
    location.appendChild(ulE1);

    for (var i = 0; i < hours.length; i++) {
      var liE1 = document.createElement('li');
      ulE1.appendChild(liE1);
      liE1.textContent = ` ${hours[i]} : ${this.NumOfCookiesPerHourArr[i]} cookies `;
    }
    var liE2 = document.createElement('li');
    ulE1.appendChild(liE2);
    liE2.textContent = `Total: ${this.totalNumOfCookies}`;
  }
};

// HELPER FUNCTIONS
function calcRandomNumber(min, max) {
  var rand = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(rand);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

seattle.calcRandomCustPerHour();
seattle.calcNumOfCookies();
seattle.render();
