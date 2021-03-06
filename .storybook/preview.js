import { configure } from '@storybook/web-components';
import buildStencilStories from './stories/automatedStories';
import '../src/global/global.css';

const loader = require('../loader/index.cjs.js');

const COLLECTIONS = [
  {
    name: 'Design System',
    componentsCtx: require.context('../dist/collection', true, /\/components\/([^/]+)\/\1\.js$/),
    storiesCtx: require.context('../src', true, /\.stories\.js$/),
  },
];

export const parameters = {
  layout: 'padded',
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#fff' },
      { name: 'light', value: '#ebebeb' },
      { name: 'dark', value: '#575757' },
    ],
  },
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
};

function loadStories() {
  loader.defineCustomElements(window);
  COLLECTIONS.forEach(({ name, componentsCtx, storiesCtx }) => {
    buildStencilStories(name, componentsCtx, storiesCtx);
  });
}

configure(loadStories, module);
