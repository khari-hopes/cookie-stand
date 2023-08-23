'use strict';


/* function renderTableHeader(){
 const tableElm = document.getElementById ('cookie-data-table');
 const headerRow = document.createElement ('tr');

 const blankTheElem = document.createElement('th);
 headerRow.appendChild();

 for(let i = 0; hours.length; i++) {
 const tdElem = document.getElementById('td')
tdElem.textContent = hours [i];
 }

const dailyTotalTdElem = document.createElement('td');
dailyTotalTdElem.textContent = 'Daily Location Total';
 headerRow.appendChild(tdElem);

 tableElm.appendChild(headerRow);

renderTableHeader();
*/


const storeHours = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


const hoursContainerElem = document.getElementById('hours-section');

const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,


  randomCookie: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust * - this.avgCookie)) + this.minCust;
  },

  render: function () {
    const storeContainerElem = document.createElement('div');

    const nameElem = document.createElement('p');
    nameElem.textContent = `${this.name}`;
    storeContainerElem.appendChild(nameElem);

    const timeContainerElem = document.createElement('ul');
    let dailyTotal = 0;

    for (let i = 0; i < storeHours.length; i++) {
      const theStoreHours = document.createElement('li');
      const cookiesSold = this.randomCookie();
      dailyTotal += cookiesSold;
      theStoreHours.textContent = `${storeHours[i]}: ${cookiesSold} cookies`;
      timeContainerElem.appendChild(theStoreHours);
    }

    const dailyTotalElem = document.createElement('li');
    dailyTotalElem.textContent = `Total: ${dailyTotal} cookies`;
    timeContainerElem.appendChild(dailyTotalElem);

    storeContainerElem.appendChild(timeContainerElem);
    hoursContainerElem.appendChild(storeContainerElem);
  }
};

const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,


  randomCookie: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust * - this.avgCookie)) + this.minCust;
  },

  render: function () {
    const storeContainerElem = document.createElement('div');

    const nameElem = document.createElement('p');
    nameElem.textContent = `${this.name}`;
    storeContainerElem.appendChild(nameElem);

    const timeContainerElem = document.createElement('ul');
    let dailyTotal = 0;

    for (let i = 0; i < storeHours.length; i++) {
      const theStoreHours = document.createElement('li');
      const cookiesSold = this.randomCookie();
      dailyTotal += cookiesSold;
      theStoreHours.textContent = `${storeHours[i]}: ${cookiesSold} cookies`;
      timeContainerElem.appendChild(theStoreHours);
    }

    const dailyTotalElem = document.createElement('li');
    dailyTotalElem.textContent = `Total: ${dailyTotal} cookies`;
    timeContainerElem.appendChild(dailyTotalElem);

    storeContainerElem.appendChild(timeContainerElem);
    hoursContainerElem.appendChild(storeContainerElem);
  }
};

const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,


  randomCookie: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust * - this.avgCookie)) + this.minCust;
  },

  render: function () {
    const storeContainerElem = document.createElement('div');

    const nameElem = document.createElement('p');
    nameElem.textContent = `${this.name}`;
    storeContainerElem.appendChild(nameElem);

    const timeContainerElem = document.createElement('ul');
    let dailyTotal = 0;

    for (let i = 0; i < storeHours.length; i++) {
      const theStoreHours = document.createElement('li');
      const cookiesSold = this.randomCookie();
      dailyTotal += cookiesSold;
      theStoreHours.textContent = `${storeHours[i]}: ${cookiesSold} cookies`;
      timeContainerElem.appendChild(theStoreHours);
    }

    const dailyTotalElem = document.createElement('li');
    dailyTotalElem.textContent = `Total: ${dailyTotal} cookies`;
    timeContainerElem.appendChild(dailyTotalElem);

    storeContainerElem.appendChild(timeContainerElem);
    hoursContainerElem.appendChild(storeContainerElem);
  }
};

const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,


  randomCookie: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust * - this.avgCookie)) + this.minCust;
  },

  render: function () {
    const storeContainerElem = document.createElement('div');

    const nameElem = document.createElement('p');
    nameElem.textContent = `${this.name}`;
    storeContainerElem.appendChild(nameElem);

    const timeContainerElem = document.createElement('ul');
    let dailyTotal = 0;

    for (let i = 0; i < storeHours.length; i++) {
      const theStoreHours = document.createElement('li');
      const cookiesSold = this.randomCookie();
      dailyTotal += cookiesSold;
      theStoreHours.textContent = `${storeHours[i]}: ${cookiesSold} cookies`;
      timeContainerElem.appendChild(theStoreHours);
    }

    const dailyTotalElem = document.createElement('li');
    dailyTotalElem.textContent = `Total: ${dailyTotal} cookies`;
    timeContainerElem.appendChild(dailyTotalElem);

    storeContainerElem.appendChild(timeContainerElem);
    hoursContainerElem.appendChild(storeContainerElem);
  }
};

const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,

  randomCookie: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust * - this.avgCookie)) + this.minCust;
  },

  render: function () {
    const storeContainerElem = document.createElement('div');

    const nameElem = document.createElement('p');
    nameElem.textContent = `${this.name}`;
    storeContainerElem.appendChild(nameElem);

    const timeContainerElem = document.createElement('ul');
    let dailyTotal = 0;

    for (let i = 0; i < storeHours.length; i++) {
      const theStoreHours = document.createElement('li');
      const cookiesSold = this.randomCookie();
      dailyTotal += cookiesSold;
      theStoreHours.textContent = `${storeHours[i]}: ${cookiesSold} cookies`;
      timeContainerElem.appendChild(theStoreHours);
    }

    const dailyTotalElem = document.createElement('li');
    dailyTotalElem.textContent = `Total: ${dailyTotal} cookies`;
    timeContainerElem.appendChild(dailyTotalElem);

    storeContainerElem.appendChild(timeContainerElem);
    hoursContainerElem.appendChild(storeContainerElem);
  }
};



seattle.render();


tokyo.render();


dubai.render();


paris.render();


lima.render();
