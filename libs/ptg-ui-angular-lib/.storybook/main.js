const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../**/*.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    ...rootMain.addons,
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config, { configType }) => {
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    },{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
       include: /libs\/ptg-ui-angular-lib|src|node_modules/,
    },{
     test: /\.css$/,
    use: ['style-loader', 'css-loader'],
     include: /node_modules/,
  });
 config.resolve.extensions.push('.ts', '.tsx', '.html', '.scss' ,'.css');
    return config;
  },
};
