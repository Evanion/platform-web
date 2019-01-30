/* tslint:disable */
const kebabCase = require('lodash.kebabcase');
const isRequired = require('../utils/isRequired');
module.exports = function(plop) {
  plop.setGenerator('service', {
    description: 'create a new service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the service NAME?',
        validate: isRequired,
        filter: name => name.toLowerCase()
      },
      {
        type: 'confirm',
        name: 'mobx',
        message: 'Do you want to use MOBX?'
      }
    ],
    actions: choises => {
      let actions = [
        {
          type: 'add',
          path: 'src/Routes/{{{pascalCase name}}}/index.ts',
          templateFile: 'plop/templates/route/manifest.hbs'
        },
        {
          type: 'add',
          path:
            'src/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.tsx',
          templateFile: 'plop/templates/route/component.hbs'
        },
        {
          type: 'add',
          path:
            'src/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.test.tsx',
          templateFile: 'plop/templates/route/unittest.hbs'
        }
      ];
      if (choises.scss) {
        actions.push({
          type: 'add',
          path:
            'src/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.scss',
          templateFile: 'plop/templates/route/stylesheet.hbs'
        });
      }
      if (choises.i18n) {
        actions.push({
          type: 'add',
          path: 'src/Routes/{{{pascalCase name}}}/messages.ts',
          templateFile: 'plop/templates/route/messages.hbs'
        });
      }

      return actions;
    }
  });
};
