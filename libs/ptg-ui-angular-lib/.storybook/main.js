const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../**/*.stories.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    ...rootMain.addons,
    '@storybook/addon-docs',
    '@storybook/addon-controls',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // Add MDX loader
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            // Add any Babel options here
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            // Add any MDX options here
          },
        },
      ],
    });

    return config;
  },
};
// const rootMain = require('../../../.storybook/main');


// module.exports = {
//   ...rootMain,

//   core: { ...rootMain.core, builder: 'webpack5' },

//   stories: [
//     ...rootMain.stories,
//     '../**/*.stories.mdx',
//     '../**/*.stories.@(js|jsx|ts|tsx)',
//   ],
//   addons: [...rootMain.addons,'@storybook/addon-docs','@storybook/addon-controls'],
//   framework: {
//     name: '@storybook/angular',
//     options: {},
//   },
//   webpackFinal: async (config, { configType }) => {
//     // apply any global webpack configs that might have been specified in .storybook/main.js
//     if (rootMain.webpackFinal) {
//       config = await rootMain.webpackFinal(config, { configType });
//     }

//     // add your own webpack tweaks if needed

//     return config;
//   },
// };