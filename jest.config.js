module.exports = {
  transform: {
    '\\.(js|jsx)?$': ['babel-jest', { rootMode: 'upward' }],
  },
  testMatch: ['<rootDir>/tests/?(*.)test.{js,jsx}'], // looks for your test
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
