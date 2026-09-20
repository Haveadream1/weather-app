module.exports = {
  // Tell Jest to use Babel for modern JS syntax
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  // Tell Jest to mock these file extensions
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svgMock.js",
  },
  // ell Jest to IGNORE the Playwright E2E tests directory
  testPathIgnorePatterns: ["<rootDir>/tests/"],
};