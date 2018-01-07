const commonConfig = require('./jest.config.common');

module.exports = {
  ...commonConfig,
  testMatch: [
    '**/src/**/?(*.)(spec|test).js',
    '**/__tests__/**/?(*.)(spec|test).js'
  ],
  collectCoverageFrom: ['src/**/*.js'],
  setupTestFrameworkScriptFile: './jest/unit-test.init.js'
};
