var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'src/**/*.spec.js',
      'src/**/*.spec.jsx'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'src/**/*.jsx': ['webpack', 'sourcemap']
    },
    webpack: { // kind of a copy of your webpack config
      devtool: 'inline-source-map', // just do inline source maps instead of the default
      module: webpackConfig.module,
      // plugins: webpackConfig.plugins,
      externals: webpackConfig.externals,
      resolve: webpackConfig.resolve
    },
    webpackServer: {
      stats: 'errors-only'
    },
    reporters: ['mocha'],
    mochaReporter: {
      colors: {
        warning: 'black',
        error: 'red'
      },
      mochaReporter: {
        showDiff: 'unified'
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeCanary'],
    singleRun: false,
    concurrency: Infinity
  })
}
