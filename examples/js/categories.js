// obtain a reference to the module
// when using the module in your project, this line would be
// const UKPD = require('ukpd')
const UKPD = require('../../build')

async function main () {
  const result = await UKPD.categories()

  const categories = result.map((category) => category.name)

  console.log('the following categories are available:', categories.join(', '))
}

main()
