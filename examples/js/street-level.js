// obtain a reference to the module
// when using the module in your project, this line would be
// const traffic = require('ukpd')
const UKPD = require('../../build')

async function main () {
  const results = await UKPD.streetLevel(52.629729, -1.131592)

  console.log('there were', results.length, 'crimes')
}

main()
