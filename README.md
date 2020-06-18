# ukpd
[![npm version](https://badge.fury.io/js/ukpd.svg)](https://badge.fury.io/js/ukpd)

A client for the [UK Police API](https://data.police.uk/docs/),
compatible with [Node.js](https://nodejs.org/en/) and the browser.

## Installation
* `npm install ukpd --save`

```javascript
const UKPD = require('ukpd')

try {
  const data = await UKPD.streetLevel('52.629729', '-1.131592', '2016-07')
  console.log('data!', data)
} catch (err) {
  console.error('An error occurred', err)
}
```

You can find more information by looking at any of the available [methods](https://github.com/AlexChesters/ukpd/tree/master/src/methods).
