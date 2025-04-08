const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (config) => {
  return {
    ...config,
    entry: 'apps/ptg-ui-apps-backend/src/main.ts',
    resolve: {
      extensions: ['.js', '.ts', '.json', '.jsx', '.tsx'],
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        fs: false,
        path: require.resolve('path-browserify'),
        url: require.resolve('url/'),
        stream: require.resolve('stream-browserify'),
        zlib: require.resolve('browserify-zlib'),
        crypto: require.resolve('crypto-browserify'),
        os: require.resolve('os-browserify/browser'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        vm: require.resolve('vm-browserify'),
        net: false,
        async_hooks: false,
        dns: false,
        child_process: false,
        tls: false
      }
    },
    externals: {
      nodemailer: 'commonjs nodemailer'
    },
    plugins: [
      ...(config.plugins || []),
      new HtmlWebpackPlugin({
        template: 'apps/ptg-ui-apps-backend/src/index.html'
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      }),
      new webpack.ContextReplacementPlugin(
        /express[/\\]lib/,
        (data) => {
          delete data.dependencies[0].critical;
          return data;
        }
      )
    ]
  };
};
