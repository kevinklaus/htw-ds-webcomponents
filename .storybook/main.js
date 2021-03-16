const path = require('path');

module.exports = {
  stories: ['../src/*.stories.mdx', '../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
  ],
  presets: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.devServer = {
      watchContentBase: true,
      contentBase: path.join(__dirname, 'src'),
      historyApiFallback: true,
    };

    config.module.rules[0].use[0].options.sourceType = 'unambiguous';

    config.module.rules.push({
      test: /.\.stories\.js$/,
      exclude: /(src)/,
      use: 'raw-loader',
    });
    config.resolve.extensions.push('.stories.js');

    config.resolve.alias = {
      '@src': path.resolve(__dirname, '../dist/collection'),
    };

    // Return the altered config
    return config;
  },
};
