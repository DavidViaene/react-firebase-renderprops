jest.mock('react-native-fetch-blob', () => {
  return {
    DocumentDir: () => {},
    fetch: () => {},
    base64: () => {},
    android: () => {},
    ios: () => {},
    config: () => {},
    session: () => {},
    fs: {
      readFile: () => {
        return Promise.resolve();
      },
      dirs: {
        MainBundleDir: () => {},
        CacheDir: () => {},
        DocumentDir: () => {}
      }
    },
    wrap: () => {},
    polyfill: () => {},
    JSONStream: () => {}
  };
});
