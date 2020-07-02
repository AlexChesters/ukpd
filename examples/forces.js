/* eslint-disable @typescript-eslint/no-var-requires */

// obtain a reference to the module
// when using the module in your project, this line would be
// const traffic = require('ukpd')
const UKPD = require('../build/src')

async function main () {
  const result = await UKPD.forces()

  const forces = result.map((force) => force.name)

  console.log('data for the following police forces are available:', forces.join(', '))
}

main()
