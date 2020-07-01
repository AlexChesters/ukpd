const { defaults } = require('jest-config') // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    '\.ts$' // eslint-disable-line no-useless-escape
  ]
}
