/* eslint-disable @typescript-eslint/no-var-requires */

// obtain a reference to the module
// when using the module in your project, this line would be
// const traffic = require('ukpd')
const UKPD = require('../build/src')

async function main () {
  const results = await UKPD.stopAndSearch('52.629729', '-1.131592')

  console.log('there were', results.length, 'stop and searches')
}

main()
