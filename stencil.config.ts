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
        { src: 'components/**/*readme.md', warn: true}
      ],
    },
    {
      type: 'docs-readme',
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
