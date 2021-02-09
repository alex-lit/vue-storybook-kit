const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js');

module.exports = nuxifyStorybook({
  stories: ['@/stories/**/*.stories.ts'],
  addons: [
    '@storybook/theming',
    '@storybook/addon-storysource',
    'storybook-zeplin/register',
  ],
});
