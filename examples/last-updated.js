/* eslint-disable @typescript-eslint/no-var-requires */

// obtain a reference to the module
// when using the module in your project, this line would be
// const traffic = require('ukpd')
const UKPD = require('../build')

async function main () {
  const result = await UKPD.lastUpdated()

  console.log('data was last updated on', result.date)
}

main()
