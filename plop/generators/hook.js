/* tslint:disable */
const kebabCase = require('lodash.kebabcase');
const isRequired = require('../utils/isRequired');
module.exports = function(plop) {
  plop.setGenerator('hook', {
    description: 'create a new react hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What is the hook's NAME?",
        validate: isRequired,
        filter: name => name.toLowerCase()
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of HOOK do you want to base it on?',
        validate: isRequired,
        choices: ['State', 'Effect', 'Reducer', 'Context', 'Callback', 'Memo', 'Ref', 'ImperativeHandle', 'LayoutEffect', 'DebugValue'],
        default: 'State'
      }, 
      {
        type: 'confirm',
        name: 'shared',
        message: 'Is this a SHARED hook?'
      },
      {
        type: 'list',
        name: 'parent',
        message: 'What state is your new hook RELATED to?',
        when: ({ shared }) => !shared,
        choices: () => {
          return getDirs(join(__dirname, '../../', './src/Routes'));
        }
      },
      
    ],
    actions: ({shared}) => {
      return [{
        type: 'modify',
        path: shared 
          ? 'src/Routes/{{parent}}/{{parent}}.hooks.ts'
          :'src/Utils/Hooks/Hooks.ts',
        pattern: /(\/\* --- add hooks --- \*\/)/gi,
        templateFile: 'plop/templates/hook/hook.hbs',
      },];
    }
  });
};
