module.exports = {
  preset: 'react-native',
  bail: true,
  moduleFileExtensions: ['js', 'jsx', 'json'],
  setupFiles: [
    './__mocks__/firebase.js',
    './__mocks__/react-native-fetch-blob.js'
  ],
  verbose: true,
  transformIgnorePatterns: ['node_modules/(?!react-native)/'],
  globals: {
    window: {}
  }
};
