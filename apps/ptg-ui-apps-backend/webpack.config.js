const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (config, context) => {
  return {
    ...config,
    mode: 'development',
    entry: './apps/ptg-ui-apps-backend/src/main.ts',
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
        dns: false, // Disable dns for browser builds
        child_process: false, // Disable child_process for browser builds
        tls: false // Disable tls for browser builds
      }
    },
    externals: {
      nodemailer: 'commonjs nodemailer' // Exclude nodemailer from the Webpack bundle
    },
    plugins: [
      ...(config.plugins || []),
      new HtmlWebpackPlugin({
        template: './apps/ptg-ui-apps-backend/src/index.html'
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      })
    ]
  };
};
