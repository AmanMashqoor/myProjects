/* 
// Your JSON data (replace this with your actual data)
const jsonData = [
  ["BTC/INR", "$20234.21", "$20233.21", "$20235.00", "0.01"],
  ["ETH/INR", "$1042.98", "$1045.00", "$1049.00", "0.01"]
  // Add more entries here
];

// Get the reference to the div where the table will be placed
const cryptoTableDiv = document.getElementById("cryptoTable");

// Create and populate the table
const table = document.createElement("table");
table.classList.add("crypto-table");

// Create table header
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();
["Index", "Name", "Last", "Buy", "Sell", "Volume", "Base_unit"].forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
});

// Create table body and populate data
const tableBody = table.createTBody();
jsonData.forEach((rowData, index) => {
  const row = tableBody.insertRow();
  row.insertCell(0).textContent = (index + 1).toString();
  rowData.forEach((cellData) => {
    const cell = row.insertCell();
    cell.textContent = cellData;
  });
});

// Append the table to the div
cryptoTableDiv.appendChild(table);

 */

fetch('/api/tickers') // Request to your Express server
  .then((response) => response.json())
  .then((data) => {
    const objectWithTenTickers = data;

    const tableBody = document.getElementById('table-body');

    objectWithTenTickers.forEach((entry, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${index + 1}</td>
          <td>${entry.last}</td>
          <td>${entry.value}</td>
      `;
      tableBody.appendChild(row);
    });

  
    console.log(objectWithTenTickers);
    console.log("Last = " + objectWithTenTickers[0][1].last);
    console.log("Buy = " + objectWithTenTickers[0][1].buy);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
