/* tslint:disable */
const kebabCase = require('lodash.kebabcase');
const isRequired = require('../utils/isRequired');
module.exports = function(plop) {
  plop.setGenerator('proxy', {
    description: 'Set proxy for backend requests',
    prompts: [
      {
        type: 'input',
        name: 'url',
        message: 'What is the URL to the backend you want to proxy to?',
        validate: isRequired,
        default: 'http://localhost:9000'
      }
    ],
    actions: choises => {
      let actions = [
        {
          type: 'add',
          path: 'src/Routes/{{{pascalCase name}}}/index.ts',
          templateFile: 'plop/templates/ci/manifest.hbs'
        },
        {
          type: 'add',
          path:
            'src/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.tsx',
          templateFile: 'plop/templates/ci/component.hbs'
        },
        {
          type: 'add',
          path:
            'src/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.test.tsx',
          templateFile: 'plop/templates/ci/unittest.hbs'
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
