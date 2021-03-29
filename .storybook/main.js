// eslint-disable-next-line import/no-unresolved
const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js');

module.exports = nuxifyStorybook({
  addons: [
    '@storybook/theming',
    '@storybook/addon-storysource',
    'storybook-zeplin/register',
  ],

  stories: ['@/stories/**/*.stories.ts'],
});
