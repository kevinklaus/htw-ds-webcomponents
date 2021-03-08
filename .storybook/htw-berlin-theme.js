import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'HTW Berlin Design System',
  brandUrl: 'https://htw-berlin.de',
  brandImage: '../src/assets/350x150pxStorybookLogo.png',

  colorPrimary: '#76B900',
  colorSecondary: '#76B900',

  // UI
  appBg: '#ebebeb',
  appContentBg: '#fff',
  appBorderColor: '#F3F8E9',
  appBorderRadius: 8,

  // Text colors
  textColor: '#333',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#333',
  barSelectedColor: '#76B900',
  barBg: '#F3F8E9',

  // Form colors
  inputBg: '#fff',
  inputBorder: '#F3F8E9',
  inputTextColor: '#333',
  inputBorderRadius: 4,
});
