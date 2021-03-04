import { configure } from '@storybook/web-components';
import buildStencilStories from './stories/automatedStories';
import '../src/global/global.css';

const loader = require('../loader/index.cjs.js');

const COLLECTIONS = [
  {
    name: 'HTW Berlin Web Components',
    componentsCtx: require.context('../dist/collection', true, /\/components\/([^/]+)\/\1\.js$/),
    storiesCtx: require.context('../src', true, /\.stories\.tsx$/),
  },
];

function loadStories() {
  loader.defineCustomElements(window);
  COLLECTIONS.forEach(({ name, componentsCtx, storiesCtx }) => {
    buildStencilStories(name, componentsCtx, storiesCtx);
  });
}

configure(loadStories, module);
