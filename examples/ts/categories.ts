// obtain a reference to the module
// when using the module in your project, this line would be
// import * as UKPD from 'ukpd'
import * as UKPD from '../../build'

async function main () {
  const result = await UKPD.categories()

  const categories = result.map((category) => category.name)

  console.log('the following categories are available:', categories.join(', '))
}

main()
