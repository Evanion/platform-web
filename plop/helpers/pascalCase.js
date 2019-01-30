module.exports = function(plop) {
  plop.setHelper('pascalCase', function(text) {
    return text
      .match(/[a-z]+/gi)
      .map(
        word => `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`
      )
      .join('');
  });
};
