// obtain a reference to the module
// when using the module in your project, this line would be
// import * as UKPD from 'ukpd'
import * as UKPD from '../../build'

async function main () {
  const result = await UKPD.lastUpdated()

  console.log('data was last updated on', result.date)
}

main()
