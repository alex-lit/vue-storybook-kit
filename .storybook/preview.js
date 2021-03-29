/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { parameters as nuxtParameters } from '~~/.nuxt-storybook/storybook/preview.js';

export * from '~~/.nuxt-storybook/storybook/preview.js';

export const parameters = {
  ...nuxtParameters,

  backgrounds: {
    values: [{ name: 'Dark', value: '#383838' }],
  },

  layout: 'fullscreen',
};

export const decorators = [
  () =>
    "<ui-app style='background-color: transparent;'><div style='padding: 1rem'><story></story></div></ui-app>",
];
