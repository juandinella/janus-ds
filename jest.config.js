module.exports = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[tj]sx?$': './jest.transform.js',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(ripio-icons|@ripio/mosaic-icons)/)',
  ],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|mdx|otf|webp|svg|ttf|woff|woff2)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFiles: [
    '<rootDir>/polyfills.js',
    '<rootDir>/__mocks__/documentMock.js',
    'jest-canvas-mock',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  modulePathIgnorePatterns: ['<rootDir>/templates/'],
}
