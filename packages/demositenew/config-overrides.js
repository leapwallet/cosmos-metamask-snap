const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  webpack: function (config, env) {
    config.resolve = {
      extensions: ['.tsx', '.ts', '.js'],
      plugins: [new TsconfigPathsPlugin({})],
      fallback: {
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer'),
        crypto: false,
        path: require.resolve('path-browserify'),
        assert: require.resolve('assert'),
        http: false,
        https: false,
        url: false,
      },
    };
    return config;
  },
};
