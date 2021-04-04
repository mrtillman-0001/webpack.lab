//const glob = require('glob');

module.exports = {
  //entry: glob.sync('./src/js/*.js'),
  entry: './src/js/app.js',
  mode: 'development',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
};