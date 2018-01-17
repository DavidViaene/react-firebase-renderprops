export const getExtension = path => {
  return path
    .split('.')
    .pop()
    .toLowerCase();
};
