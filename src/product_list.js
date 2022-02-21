console.log('checkpoint 1');
//Followed the examples set in the AdvancedJS repo.

// Our array of objects to hard code the product list
var mockProducts = [
    {_id: '123', name: 'Motherboard', description: '<img src="img/msi_mb.jpg" style="width:200px;height:200px">', stocked_bool: true, stocked: 'Yes', price: 59.99},
    {_id: '456', name: 'CPU', description: '<img src="img/ryzen_cpu.jpg" style="width:200px;height:200px">', stocked_bool: true, stocked: 'Yes', price: 89.99},
    {_id: '789', name: 'GPU', description: '<img src="img/msi-trio-10g-RTX-3080.jpeg" style="width:200px;height:200px">', stocked_bool: false, stocked: 'No', price: 109.99},
    {_id: '012', name: 'Case', description: '<img src="img/corsair_case.png" style="width:200px;height:200px">', stocked_bool: true, stocked: 'Yes', price: 39.99},
    {_id: '023', name: 'Cooler', description: '<img src="img/cpu_cooler.jpg" style="width:200px;height:200px">', stocked_bool: false, stocked: 'No', price: 29.99},
  ];
  
  function renderProducts(results) {
    var tableBody = document.querySelector('#product-list');
    //clear out the table body HTML of any older results.
    tableBody.innerHTML = '';
  
    //Map each 'record' to a string containing the HTML for a result row.
    var tableRows = results.map(function (result, index) {
      return `<tr><td> ${index} </td> <td> ${result.name} </td> <td> ${result._id} </td> <td> ${result.description} </td> <td> ${result.price} </td><td> ${result.stocked} </td> </tr>`;
    });
  
    tableRows.forEach(function (row) {
      tableBody.innerHTML += row;
    });
  
    var f = 'checkpoint 2';
    console.log(f);
    }
  
  renderProducts(mockProducts);

  function orderBy(orderValue) {
      var orderedResults = (orderValue == 'name') ?
                mockProducts.sort(function (a, b) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                }) :
                mockProducts.sort(function (a, b) {
                    return a[orderValue] - b[orderValue];
                });
    renderProducts(orderedResults);
  }
  document.querySelector('#orderBy').addEventListener('change', function(event) {
        // When the OrderBy select is changed, will call an event.
        orderBy(event.target.value);
  });

  
  //Used to Sort results by Price or if its in stock
function toggleStocked(sortVal) {
    var filteredResults = mockProducts.filter(function (result) {
            return sortVal || result.stocked_bool;
    });
    renderProducts(filteredResults);
}
function sortByPrice(priceSort) {
    var orderedResults = (priceSort == 'price') ?
        mockProducts.sort(function (a, b) {
            var priceA = a.price;
            var priceB = b.price;

            if (priceA < priceB) {
                return -1;
            }
            if (priceA > priceB) {
                return 1;
            }
        }) :
        mockProducts.sort(function (a, b) {
            return a[priceSort] - b[priceSort];
        });
        renderProducts(orderedResults);
}

document.querySelector('#sortBy').addEventListener('change', function(event) {
      var value = event.target.value;
      var value2 = event.target.value === 'true';
      if (value == 'price') {
        sortByPrice(value);
      }
      if (value != 'price') {
          toggleStocked(value);
      }
});