module.exports = function isRequired(value) {
  if (/.+/.test(value)) {
    return true;
  }
  return 'Field is required';
};
