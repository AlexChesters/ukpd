# ukpd
[![npm version](https://badge.fury.io/js/ukpd.svg)](https://badge.fury.io/js/ukpd)
![CI](https://github.com/AlexChesters/ukpd/workflows/CI/badge.svg)

A Node.js client for the [UK Police API](https://data.police.uk/docs/).

## Installation
* `npm install ukpd --save`

```javascript
const UKPD = require('ukpd')

try {
  const data = await UKPD.streetLevel(52.629729, -1.131592)
  console.log('data!', data)
} catch (err) {
  console.error('An error occurred', err)
}
```

To retrieve crimes within a street-level custom area, pass a polygon as
colon-separated latitude/longitude pairs to `streetLevelCustomArea`:

```javascript
const poly = '52.629729,-1.131592:52.630729,-1.131592:52.630729,-1.130592:52.629729,-1.130592'
const data = await UKPD.streetLevelCustomArea(poly)
```

Rate-limited requests are retried up to three times after waiting for the
number of seconds returned in the API response's `retry_after` field.

You can find more information by looking at any of the available
[methods](./src/methods), or the [examples](./examples).

## Acknowledgements
All data is provided by
[data.police.uk](https://data.police.uk/about/)
under the
[Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
