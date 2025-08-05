// obtain a reference to the module
// when using the module in your project, this line would be
// const traffic = require('ukpd')
const UKPD = require('../build')

async function main () {
  const results = await UKPD.stopAndSearch('cheshire')

  console.log('there were', results.length, 'stop and searches')
}

main()
