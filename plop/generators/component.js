/* tslint:disable */
const isRequired = require('../utils/isRequired');
const { readdirSync, statSync } = require('fs');
const { join } = require('path');

const getDirs = p =>
  readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());

module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What is the component's NAME?",
        validate: isRequired,
        filter: name => name.toLowerCase()
      },
      {
        type: 'confirm',
        name: 'shared',
        message: 'Should this be a SHARED component?'
      },
      {
        type: 'list',
        name: 'parent',
        message: 'What state is your new component RELATED to?',
        when: ({ shared }) => !shared,
        choices: () => {
          return getDirs(join(__dirname, '../../', './src/Routes'));
        }
      },
      {
        type: 'confirm',
        name: 'extended',
        message: 'Do you want to CONFIGURE more?',
        default: false
      },
      {
        type: 'confirm',
        when: ({ extended }) => extended,
        name: 'scss',
        message: 'Do you want to use SCSS?',
        default: false
      },
      {
        type: 'confirm',
        when: ({ extended }) => extended,
        name: 'i18n',
        message: 'Do you want to use TRANSLATIONS?',
        default: false
      }
    ],
    actions: ({i18n, scss, shared}) => {
      const actions = [
        {
          type: 'add',
          path: shared
            ? 'src/Components/{{{pascalCase name}}}/index.ts'
            : 'src/Routes/{{parent}}/Components/{{{pascalCase name}}}/index.ts',
          templateFile: 'plop/templates/component/manifest.hbs'
        },
        {
          type: 'add',
          path: shared
            ? 'src/Components/{{{pascalCase name}}}/{{{pascalCase name}}}.tsx'
            : 'src/Routes/{{parent}}/Components/{{{pascalCase name}}}/{{{pascalCase name}}}.tsx',
          templateFile: 'plop/templates/component/component.hbs'
        },
        {
          type: 'add',
          path: shared
            ? 'src/Components/{{{pascalCase name}}}/{{{pascalCase name}}}.test.tsx'
            : 'src/Routes/{{parent}}/Components/{{{pascalCase name}}}/{{{pascalCase name}}}.test.tsx',
          templateFile: 'plop/templates/component/unittest.hbs'
        },
        {
          type: 'add',
          path: shared
            ? 'src/Components/{{{pascalCase name}}}/{{{pascalCase name}}}.story.tsx'
            : 'src/Routes/{{parent}}/Components/{{{pascalCase name}}}/{{{pascalCase name}}}.story.tsx',
          templateFile: 'plop/templates/component/story.hbs'
        }
      ];
      if (scss) {
        actions.push({
          type: 'add',
          path: shared
            ? 'src/Components/{{{pascalCase name}}}/{{{pascalCase name}}}.scss'
            : 'src/Routes/{{parent}}/Components/{{{pascalCase name}}}/{{{pascalCase name}}}.scss',
          templateFile: 'plop/templates/component/stylesheet.hbs'
        });
      }
      if (i18n) {
        actions.push({
          type: 'add',
          path: shared
            ? 'src/Components/{{{pascalCase name}}}/messages.ts'
            : 'src/Routes/{{parent}}/Components/{{{pascalCase name}}}/messages.ts',
          templateFile: 'plop/templates/component/messages.hbs'
        });
      }

      return actions;
    }
  });
};
