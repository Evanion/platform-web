const snakeCase = require('lodash.snakecase');

module.exports = function(plop) {
  plop.setHelper('upperCase', function(text) {
    return String(snakeCase(text)).toUpperCase();
  });
};
