module.exports = {
    verbose: true,
    roots: ['<rootDir>/src'],
    moduleDirectories: ['<rootDir>/node_modules'],
    collectCoverageFrom: ['**/*.tsx', '!**/*.stories.tsx'],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
      '*.css',
        'reportWebVitals.ts',
        '/node_modules/',
        '/src/*.css/',
        '/src/index.jsx',
    ],
    moduleNameMapper: {
      '\\.(woff2?|ttf|otf|eot|png|jpe?g|gif|css|scss)$':
        '<rootDir>/mock/jest-mockfile.js',
      '\\.scss$': 'identity-obj-proxy',
      '\\.svg': '<rootDir>src/mocks/svgrMock.tsx',
    },
    modulePaths: ['<rootDir>/src/'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.svg$': 'jest-svg-transformer',
    },
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect',
      '<rootDir>/src/setupTests.ts',
    ],
    setupFiles: ['jest-canvas-mock'],
    testTimeout: 10000,
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 50,
        lines: 50,
        statements: 50,
      },
    },
};