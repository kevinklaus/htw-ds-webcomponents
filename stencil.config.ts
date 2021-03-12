import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'htw-berlin-ds-webcomponents',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'global/fonts', dest: './fonts', warn: true},
        { src: 'global/350x150pxStorybookLogo.png', warn: true},
      ],
    },
       { 
      type: 'docs-readme',
      footer: '## Using Dark Styles **When switiching to dark mode styles, make sure to select the dark background in the tool bar above for best viewing results.**',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'global/fonts', dest: 'build/fonts'}
      ],
    },
  ],
};
