const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const hoursContainerElem = document.getElementById('hours-section');

function Store(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.salesTotal = 0;
  this.totalCookies = 0;
}

Store.prototype.render = function () {
  const newRow = document.createElement('tr');
  const cityName = document.createElement('td');
  const salesForDay = document.createElement('td');
  cityName.textContent = this.name;
  newRow.appendChild(cityName);
  for (let i = 0; i < storeHours.length; i++) {
    const cookieSales = document.createElement('td');
    cookieSales.textContent = this.cookiesPerHour[i];
    newRow.appendChild(cookieSales);
    salesForDay.textContent = this.salesTotal;
    newRow.appendChild(salesForDay);
  }
  tableContainer.appendChild(newRow);
};

Store.prototype.randomizer = function () {
  this.customersPerHour = [];
  for (let i = 0; i < storeHours.length; i++) {
    const ranCustNum = Math.floor(
      Math.random() * (this.maxCust - this.minCust) +
      this.minCust
    );
    this.customersPerHour.push(ranCustNum);
  }
  return this.customersPerHour;
};

Store.prototype.randomCookie = function () {
  const cookiesArray = this.customersPerHour;

  for (let i = 0; i < cookiesArray.length; i++) {
    const multipliedValue = parseInt(cookiesArray[i] * this.avgCookie);
    cookiesArray[i] = multipliedValue;
    this.salesTotal += multipliedValue;
  }

  this.cookiesPerHour = cookiesArray;
};

const locations = [
  new Store('Seattle: ', 23, 65, 6.3),
  new Store('Tokyo: ', 3, 24, 1.2),
  new Store('Dubai: ', 11, 38, 3.7),
  new Store('Paris: ', 20, 38, 2.3),
  new Store('Lima: ', 2, 16, 4.6),
];

const tableContainer = document.getElementById('cities');

function headerCreator() {
  const blankElement = document.createElement('th');
  blankElement.textContent = 'Location';
  tableContainer.appendChild(blankElement);
  for (let i = 0; i < storeHours.length; i++) {
    const locationHours = document.createElement('th');
    locationHours.textContent = storeHours[i];
    tableContainer.appendChild(locationHours);
  }
  const SalesTotal = document.createElement('th');
  SalesTotal.textContent = 'Daily Sales Total';
  tableContainer.appendChild(SalesTotal);
}

headerCreator();

function bodyCreator() {
  for (let i = 0; i < locations.length; i++) {
    locations[i].randomizer();
    locations[i].randomCookie();
    locations[i].render();
  }
}

bodyCreator();

function footerCreator() {
  const hrTotalCont = document.createElement('tfoot');
  tableContainer.appendChild(hrTotalCont);

  const totalsCell = document.createElement('td');
  totalsCell.textContent = 'Totals:';
  hrTotalCont.appendChild(totalsCell);

  let hourTotals = [];
  let grandTotal = 0;

  for (let i = 0; i < storeHours.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < locations.length; j++) {
      let currentLocation = locations[j];
      let locationHourSale = currentLocation.cookiesPerHour[i];
      hourTotal += locationHourSale;
    }
    hourTotals.push(hourTotal);
    grandTotal += hourTotal;
  }

  for (let i = 0; i < storeHours.length; i++) {
    const footerInfo = document.createElement('td');
    footerInfo.textContent = hourTotals[i];
    hrTotalCont.appendChild(footerInfo);
  }

  const totalCell = document.createElement('td');
  totalCell.textContent = grandTotal;
  hrTotalCont.appendChild(totalCell);

  console.log(hourTotals);
}

footerCreator();
