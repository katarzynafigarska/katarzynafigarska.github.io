DATA = [{"id": 1,"firstName": "Jan","lastName": "Kowalski","dateOfBirth": "1.7.1990 11:35","company": "XSolve","note": 90},{"id": 4,"firstName": "Justyna","lastName": "Kowalska","dateOfBirth": "4.02.1976 14:37","company": "XSolve","note": 91},{"id": 2,"firstName": "Krzysztof","lastName": "Krawczyk","dateOfBirth": "28.10.1950 2:15","company": "Chilid","note": 27},{"id": 3,"firstName": "Bogusław","lastName": "Linda","dateOfBirth": "03.01.1963 23:10","company": "XSolve","note": 50},{"id": 5,"firstName": "Krzysztof","lastName": "Kononowicz","dateOfBirth": "10.10.1910 18:00","company": "Chilid","note": 77},{"id": 6,"firstName": "Maryla","lastName": "Rodowicz","dateOfBirth": "29.02.1936 11:35","company": "XSolve","note": 8}]
HEADERS = [ 'id','firstName','lastName','dateOfBirth','company','note' ];
FILTERS = { 'id': '','firstName': '','lastName': '','dateOfBirth': '','company': '','note': '' };

function createTableData(data) {
  let tableData = document.createElement("td");
  tableData.innerHTML = data;
  return tableData;
}
function createTableHead(data) {
  let tableHeader = document.createElement("th");
  tableHeader.innerHTML = data;
  tableHeader.addEventListener('click', sortTable);
  return tableHeader;
}
function createTableRows(dataSet) {
  let tabelRow  = document.createElement("tr");
  Object.values(dataSet).map(data => tabelRow.appendChild(createTableData(data)));
  return tabelRow;
}
function createTableHeads(dataSet) {
  let tabelHead  = document.createElement("tr");
  Object.values(dataSet).map(data => tabelHead.appendChild(createTableHead(data)));
  return tabelHead;
}

function createFilter(filterName, value = '') {
  let wraper = document.createElement('DIV');
  let input = document.createElement('input');
  input.id = filterName;
  input.value = value;
  let label = document.createElement('label');
  label.htmlFor = filterName;
  label.innerHTML = filterName;
  wraper.appendChild(label);
  wraper.appendChild(input);
  return wraper;
}

function createFilters(data = FILTERS) {
  let filters = document.getElementById('filters');
  filters.innerHTML = '';
  Object.keys(data).map(k => filters.appendChild(createFilter(k, data[k])));
}

function sortTable() {
  let sortedData = DATA.sort((d1,d2) => d1[this.childNodes[0].nodeValue] > d2[this.childNodes[0].nodeValue])
  initTable(sortedData);
}

function getFilters() {
  let divs =  Array.from(document.getElementById('filters').childNodes);
  let filters = {};
  divs.map(div => filters[div.querySelector('input').id] = div.querySelector('input').value);
  return filters; 
}

function applyFilters(filters) {
  let filteredData = Object.keys(DATA).map(function (key) { return DATA[key]; });;
  // filters.map(userData => console.log(userData));
  Object.keys(filters).map(filterKey => filteredData = filteredData.filter(obj => obj[filterKey] == filters[filterKey]));
  // filteredData.map(userData => console.log(userData));
  // Object.keys(filters).map(k => console.log(filters[k]));
  // return filteredData.filter(obj => obj['id'] == filters['id'])
  debugger;
  return filteredData;
}

function filterTable() {
  let currentFilters = getFilters();
  let filteredData = applyFilters(currentFilters);
  createFilters(currentFilters);  
  initTable(filteredData);
}

function initTable (data = DATA, headers = HEADERS) {
  let table = document.getElementById('table');
  heads = document.createElement('DIV');
  rows = document.createElement('DIV');
  table.innerHTML = '';
  heads.appendChild(createTableHeads(HEADERS));
  data.map(userData => rows.appendChild(createTableRows(userData)));
  table.appendChild(heads);
  table.appendChild(rows);
}
// little tirck to run function after document ready
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
  createFilters();  
  initTable();
  document.getElementById('filters').addEventListener('change', filterTable);
});