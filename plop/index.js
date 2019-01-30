const pascalCaseHelper = require('./helpers/pascalCase');
const kebabCaseHelper = require('./helpers/kebabCase');
const constCaseHelper = require('./helpers/constCase');
const componentGenerator = require('./generators/component');
const routeGenerator = require('./generators/route');
// const serviceGenerator = require('./generators/service');

module.exports = function(plop) {
  // helpers
  pascalCaseHelper(plop);
  kebabCaseHelper(plop);
  constCaseHelper(plop);

  // Generators
  componentGenerator(plop);
  routeGenerator(plop);
  // serviceGenerator(plop);
};
