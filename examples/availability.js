/* eslint-disable @typescript-eslint/no-var-requires */

// obtain a reference to the module
// when using the module in your project, this line would be
// const traffic = require('ukpd')
const UKPD = require('../build/src')

async function main () {
  const result = await UKPD.availability()

  const dates = result.map((item) => item.date)

  console.log('data is available for', dates.join(', '))
}

main()
