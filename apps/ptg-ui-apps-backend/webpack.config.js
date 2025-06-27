const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path'); // Import path module
const { NxWebpackPlugin } = require('@nx/webpack');

module.exports = (config) => {
  return {
    ...config,
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.ts'), // Use path.resolve to create an absolute path
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
        tls: false,
      },
    },
    externals: {
      nodemailer: 'commonjs nodemailer',
    },
    plugins: [
      ...(config.plugins || []),
      new webpack.ContextReplacementPlugin(/express[/\\]lib/, (data) => {
        delete data.dependencies[0].critical;
        return data;
      }),
      new NxWebpackPlugin({
        target: 'node',
        compiler: 'tsc',
        generatePackageJson: true,
      }),
    ],
  };
};
