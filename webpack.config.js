const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './check.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'check-bundle.js'
  }
};
