const { createDefaultEsmPreset } = require('ts-jest')

const tsJestTransformCfg = createDefaultEsmPreset({
  tsconfig: {
    module: 'ES2022',
    moduleResolution: 'Node'
  }
})

module.exports = {
  ...tsJestTransformCfg,
  testPathIgnorePatterns: ['build/'],
}
