# ukpd
[![Build Status](https://travis-ci.org/AlexChesters/ukpd.svg?branch=master)](https://travis-ci.org/AlexChesters/ukpd)

A [Node.js](https://nodejs.org/en/) client for the [UK Police API](https://data.police.uk/docs/).

## Installation
* `npm install ukpd --save`

```javascript
const UKPD = require('ukpd')

const printData = data => console.log(data)
const handleError = err => console.error(err)

UKPD.streetLevel('52.629729', '-1.131592', '2016-07').then(printData).catch(handleError)
```

You can find more information by looking at any of the available [methods](https://github.com/AlexChesters/ukpd/tree/master/src/methods).
