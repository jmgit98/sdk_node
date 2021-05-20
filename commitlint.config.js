module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', 'sentence-case'],
    'scope-enum': [
      2,
      'always',
      ['activity', 'bench', 'client', 'docs', 'core', 'release', 'samples', 'worker', 'workflow'],
    ],
    'header-max-length': [2, 'always', 120],
    'footer-max-line-length': [2, 'always', 120],
  },
};
