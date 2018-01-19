module.exports = function () {
  return {
    files: [
      '**/*.js',
      '!**/*.spec.js',
      '!node_modules',
      '!wallaby.js'
    ],

    filesWithNoCoverageCalculated: ['**/*.spec.js', 'node_modules'],

    tests: [
      '**/*.spec.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'jasmine'

  };
};
