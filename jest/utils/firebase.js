const auth = () => ({
  onAuthStateChanged: jest.fn(),
  signInWithEmailAndPassword: () => {
    return Promise.resolve();
  },
  signOut: () => {
    return Promise.resolve();
  }
});

const firebase = {
  auth,
  database: () => ({
    ref: () => ({
      limitToLast: jest.fn(),
      once: () => {
        return Promise.resolve();
      }
    })
  }),
  storage: jest.fn(),
  apps: [],
  initializeApp: () => ({
    auth
  })
};

export default firebase;
