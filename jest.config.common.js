module.exports = {
  bail: true,
  moduleFileExtensions: ['js', 'jsx', 'json'],
  setupFiles: [
    './__mocks__/firebase.js',
  ],
  verbose: true,
  transformIgnorePatterns: [
    'node_modules/(?!react-native|tcomb-form-native|react-navigation|react-router-native)/'
  ],
  globals: {
    window: {}
  }
};
