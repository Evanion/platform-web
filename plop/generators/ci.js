/* tslint:disable */
const kebabCase = require('lodash.kebabcase');
const isRequired = require('../utils/isRequired');
module.exports = function(plop) {
  plop.setGenerator('ci', {
    description: 'create a CI pipeline config',
    prompts: [
      {
        type: 'list',
        name: 'platform',
        message: 'What CI PLATFORM do you want to use?',
        validate: isRequired,
        choices: ['Jenkins', 'CircleCI', 'TeamCity', 'Travis CI'],
        default: 'Jenkins'
      }
    ],
    actions: choises => {
      switch (choises) {
        case 'Jenkins':
          return [{
            type: 'add',
            path: 'Jenkinsfile',
            templateFile: 'plop/templates/ci/jenkins.hbs'
          }];
        case 'CircleCI':
          return [{
            type: 'add',
            path: '.circleci',
            templateFile: 'plop/templates/ci/circleci.hbs'
          }];
        default:
        return [];
      }
    }
  });
};
