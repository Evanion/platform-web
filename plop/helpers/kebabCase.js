const kebabCase = require('lodash.kebabcase');

module.exports = function(plop) {
  plop.setHelper('kebabCase', function(text) {
    return kebabCase(text);
  });
};
