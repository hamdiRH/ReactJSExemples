module.exports = {
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/internals/testing/test-bundler.js',
    'react-testing-library/cleanup-after-each',
  ],
  setupFiles: ['raf/polyfill'],
  // testRegex: 'tests/.*\\.test\\.js$',
  snapshotSerializers: [],
  testLocationInResults: false,
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
}
