// obtain a reference to the module
// when using the module in your project, this line would be
// const UKPD = require('ukpd')
const UKPD = require('../../build')

async function main () {
  const poly = '52.629729,-1.131592:52.630729,-1.131592:52.630729,-1.130592:52.629729,-1.130592'
  const results = await UKPD.streetLevelCustomArea(poly)

  console.log('there were', results.length, 'crimes')
}

main()
