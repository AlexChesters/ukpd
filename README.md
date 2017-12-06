# ukpd
[![Build Status](https://travis-ci.org/AlexChesters/ukpd.svg?branch=master)](https://travis-ci.org/AlexChesters/ukpd)

A client for the [UK Police API](https://data.police.uk/docs/),
compatabile with [Node.js](https://nodejs.org/en/) and the browser.

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
