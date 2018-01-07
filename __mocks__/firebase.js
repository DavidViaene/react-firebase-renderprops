jest.mock('firebase', () => {
  const firebase = require('../jest/utils/firebase');
  return firebase;
});
