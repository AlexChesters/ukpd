/* eslint-disable @typescript-eslint/no-var-requires */

// obtain a reference to the module
// when using the module in your project, this line would be
// const traffic = require('ukpd')
const ukpd = require('../build/src')

async function main () {
  const result = await ukpd.lastUpdated()

  console.log('data was last updated on', result.date)
}

main()
