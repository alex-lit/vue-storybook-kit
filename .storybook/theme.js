import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#072caf',
  colorSecondary: '#989eb7',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#d8d8d8',
  appBorderRadius: 0,

  // Typography
  fontBase: '"AvertaCY", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#383838',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#383838',
  barSelectedColor: '#072caf',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#d8d8d8',
  inputTextColor: '#383838',
  inputBorderRadius: 4,

  brandTitle: 'Alfa Ui Kit',
  brandUrl: 'https://app.zeplin.io/project/0000/dashboard',
  brandImage: '/assets/images/alfacash-logo.svg',
});
