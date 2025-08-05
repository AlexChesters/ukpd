// obtain a reference to the module
// when using the module in your project, this line would be
// import * as UKPD from 'ukpd'
import * as UKPD from '../../build'

async function main () {
  const result = await UKPD.forces()

  const forcesArray = Array.isArray(result) ? result : [result]
  const forces = forcesArray.map((force) => force.name)

  console.log('data for the following police forces are available:', forces.join(', '))
}

main()
