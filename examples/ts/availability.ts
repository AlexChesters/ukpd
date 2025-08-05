// obtain a reference to the module
// when using the module in your project, this line would be
// import * as UKPD from 'ukpd'
import * as UKPD from '../../build'

async function main () {
  const result = await UKPD.availability()

  const dates = result.map((item) => item.date)

  console.log('data is available for', dates.join(', '))
}

main()
