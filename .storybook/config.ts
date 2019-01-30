import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import { addDecorator, configure } from '@storybook/react';

// @ts-ignore
import results from '../jest-test-results.json';
import 'semantic-ui-css/semantic.min.css'

const req = require.context('../src', true, /.story.tsx$/);

addDecorator(checkA11y);
addDecorator(
  //@ts-ignore
  withTests({
    results,
    filesExt: '((\\.specs?)|(\\.tests?))?(\\.tsx?)?$'
  })
);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);