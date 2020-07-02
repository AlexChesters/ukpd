/* eslint-disable @typescript-eslint/no-var-requires */

// obtain a reference to the module
// when using the module in your project, this line would be
// const traffic = require('ukpd')
const UKPD = require('../build/src')

async function main () {
  const result = await UKPD.categories()

  const categories = result.map((category) => category.name)

  console.log('the following categories are available:', categories.join(', '))
}

main()
