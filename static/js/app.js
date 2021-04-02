// from data.js
const tableData = data;
//button and form variables
let button = d3.select("#filter-btn");
let form = d3.select("#form");
const tbody = d3.select("tbody");

//create event handler function
function filterTable() {
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime"),
  // Get the value property of the input element
      inputValue = inputElement.property("value");
  // Use the form input to filter the data by blood type
  let filterData = tableData.filter(ufo => ufo.datetime === inputValue);

  data.forEach((tableData) => {
    let row = tbody.append("tr");
    Object.values(tableData).forEach(value => {
      let cell = row.append("td");
      cell.text(value);
    });
  });

};

// Create event handlers
button.on("click", filterTable);
form.on("submit", filterTable);
