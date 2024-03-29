import { create } from '@storybook/theming';
import htwStroybookImg from '../dist/collection/global/350x150pxStorybookLogo.png';

export default create({
  base: 'light',
  brandTitle: 'HTW Berlin Design System',
  brandImage: htwStroybookImg,

  colorPrimary: '#76B900',
  colorSecondary: '#76B900',

  // UI
  appBg: '#ebebeb',
  appContentBg: '#fff',
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
  inputBorder: '#C2DD91',
  inputTextColor: '#333',
  inputBorderRadius: 4,
});
