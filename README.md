# ukpd
[![npm version](https://badge.fury.io/js/ukpd.svg)](https://badge.fury.io/js/ukpd)
![CI](https://github.com/AlexChesters/ukpd/workflows/CI/badge.svg)

A Node.js client for the [UK Police API](https://data.police.uk/docs/).

## Installation
* `npm install ukpd --save`

```javascript
const UKPD = require('ukpd')

try {
  const data = await UKPD.streetLevel('52.629729', '-1.131592')
  console.log('data!', data)
} catch (err) {
  console.error('An error occurred', err)
}
```

You can find more information by looking at any of the available
[methods](./src/methods), or the [examples](./examples).

## Acknowledgements
All data is provided by
[data.police.uk](https://data.police.uk/about/)
under the
[Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
