module.exports = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'app/**/*.ts(x)',
    'api/**/*.(t|j)sx?$',
    '!app/root.tsx',
    '!app/entry.client.tsx',
    '!app/entry.server.tsx',
    '!app/routes/**/*.tsx',
  ],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/', '.cache/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  globalSetup: '<rootDir>/.jest/globalSetup.js',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/app/$1',
  },
  transform: {
    '\\.[jt]sx?$': ['babel-jest', { configFile: './.jest/babel.config.js' }],
  },
}
