console.log('checkpoint 1');
//Followed the examples set in the AdvancedJS repo.

// Our array of objects to hard code the product list
var mockProducts = [
  {_id: '123', name: 'Product 1', description: 'product desc', stocked: true},
  {_id: '456', name: 'Product 2', description: 'product desc', stocked: true},
  {_id: '789', name: 'Product 3', description: 'product desc', stocked: false},
  {_id: '012', name: 'Product 4', description: 'product desc', stocked: true},
  {_id: '023', name: 'Product 5', description: 'product desc', stocked: false},
  {_id: '034', name: 'Product 6', description: 'product desc', stocked: true},
];

function renderProducts(results) {
  var tableBody = document.querySelector('#product-list');
  //clear out the table body HTML of any older results.
  tableBody.innerHTML = '';

  //Map each 'record' to a string containing the HTML for a result row.
  var tableRows = results.map(function (result, index) {
    return `<tr><td> ${index} </td> <td> ${result.name} </td> <td> ${result.id} </td> <td> ${result.description} </td> <td> ${result.stocked} </td> </tr>`;
  });

  tableRows.forEach(function (row) {
    tableBody.innerHTML += row;
  });

  var f = 'checkpoint 2';
  console.log(f);
}

renderProducts(mockProducts);
/*
function toggleStocked(showStocked) {

}
*/
