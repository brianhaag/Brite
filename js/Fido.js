//  Fido: service to retrieve (and currently translate) data

var Fido = (function () {

  var REST = new (require("node-rest-client").Client)();
  console.log(REST);

  var fido = {};

  fido.API_KEY = "B8VWndFxx23aYNZ86xhj";
  fido.fetch = function (data) {
    return REST.get(
      "https://www.quandl.com/data/WIKI/" +
        data + "?api_key=" + fido.API_KEY,
      function (data, response) {
        console.log(response);
      }
    );
  };

  return fido;

})();

module.exports = Fido;
