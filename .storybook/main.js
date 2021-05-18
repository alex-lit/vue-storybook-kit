// eslint-disable-next-line import/no-unresolved, import/extensions
const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main');

module.exports = nuxifyStorybook({
  addons: [
    '@storybook/theming',
    '@storybook/addon-storysource',
    'storybook-zeplin/register',
  ],

  stories: ['@/stories/**/*.stories.ts'],
});
