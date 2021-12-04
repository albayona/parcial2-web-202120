const data = require('../assets/data');

function getProducts(query) {

  myData = data.filter(function (el) {
    return (el.name.toLowerCase().includes(query.toLowerCase()));
  });

  return myData;
}

module.exports = { getProducts };
