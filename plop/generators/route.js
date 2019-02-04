/* tslint:disable */
const kebabCase = require('lodash.kebabcase');
const isRequired = require('../utils/isRequired');
const { readdirSync, statSync } = require('fs');
const { join } = require('path');

const getDirs = p =>
  readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());

module.exports = function(plop) {
  plop.setGenerator('route', {
    description: 'create a new route state',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What is the route's NAME?",
        validate: isRequired,
        filter: name => name.toLowerCase()
      },
      {
        type: 'confirm',
        name: 'child',
        message: 'Should this be a CHILD route to another route?',
        default: false
      },
      {
        type: 'list',
        name: 'parent',
        message: 'What route is the PARENT of your new route?',
        when: ({ child }) => child,
        choices: () => {
          return getDirs(join(__dirname, '../../', './src/Routes'));
        },
      },
      {
        type: 'input',
        name: 'url',
        message: 'What URL should the route be mounted on?',
        default: ({ name }) => {
          return `/${kebabCase(name)}s`;
        }
      },
      {
        type: 'confirm',
        name: 'lazy',
        message: 'Should the route be LAZY LOADED?',
        when: ({ child }) => !child,
      },
      {
        type: 'confirm',
        name: 'private',
        message: 'Do you want the route to be PRIVATE?',
        when: ({ child }) => !child,
      },
      {
        type: 'confirm',
        name: 'i18n',
        message: 'Do you want to use TRANSLATIONS?',
      },
      {
        type: 'confirm',
        name: 'scss',
        message: 'Do you want to use SCSS?',
        default: ({ child }) => !child,
      },
    ],
    actions: ({ child, private, lazy, scss, i18n }) => {
      let actions = [
        {
          type: 'add',
          path: child
            ? 'src/Routes/{{parent}}/Routes/{{{pascalCase name}}}/index.ts'
            : 'src/Routes/{{{pascalCase name}}}/index.ts',
          templateFile: 'plop/templates/route/manifest.hbs',
        },
        {
          type: 'add',
          path: child
            ? 'src/Routes/{{parent}}/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.tsx'
            : 'src/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.tsx',
          templateFile: 'plop/templates/route/component.hbs',
        },
        {
          type: 'add',
          path: child
            ? 'src/Routes/{{parent}}/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.test.tsx'
            : 'src/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.test.tsx',
          templateFile: 'plop/templates/route/unittest.hbs',
        },
        {
          type: 'add',
          path: child
            ? 'src/Routes/{{parent}}/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.story.tsx'
            : 'src/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.story.tsx',
          templateFile: 'plop/templates/route/story.hbs',
        },
        {
          type: 'modify',
          path: 'src/Services/ROUTEMAP/ROUTEMAP.ts',
          pattern: /(\/\* --- route map --- \*\/)/gi,
          templateFile: 'plop/templates/route/routemap.hbs',
        },
      ];

      if (!child) {
        actions.push({
          type: 'modify',
          path: private
            ? 'src/Routes/Routes.private.tsx'
            : 'src/Routes/Routes.tsx',
          pattern: lazy
            ? /(\/\* --- route lazy --- \*\/)/gi
            : /(\/\* --- route static --- \*\/)/gi,
          templateFile: 'plop/templates/route/routeimport.hbs',
        });

        actions.push({
          type: 'modify',
          path: private
            ? 'src/Routes/Routes.private.tsx'
            : 'src/Routes/Routes.tsx',
          pattern: /(\{\/\* --- routes --- \*\/\})/gi,
          templateFile: 'plop/templates/route/route.hbs',
        });
      }

      if (scss) {
        actions.push({
          type: 'add',
          path: child
            ? 'src/Routes/{{parent}}/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.scss'
            : 'src/Routes/{{{pascalCase name}}}/{{{pascalCase name}}}.scss',
          templateFile: 'plop/templates/route/stylesheet.hbs'
        });
      }
      if (i18n) {
        actions.push({
          type: 'add',
          path: child
            ? 'src/Routes/{{parent}}/Routes/{{{pascalCase name}}}/messages.ts'
            : 'src/Routes/{{{pascalCase name}}}/messages.ts',
          templateFile: 'plop/templates/route/messages.hbs'
        });
      }

      return actions;
    }
  });
};
