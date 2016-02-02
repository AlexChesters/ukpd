# ukpd

# Usage

The module currently supports 3 endpoints, [street level](https://data.police.uk/docs/method/crime-street/), [stop and search](https://data.police.uk/docs/method/stops-force/) and [availability](https://data.police.uk/docs/method/crimes-street-dates/).

`npm install ukpd --save`

### Street-level

```
var UKPD = require('ukpd');

const location = {
  latitude: 52.629729,
  longitude: -1.131592
};

UKPD.streetLevel(location)
.then((data) => console.log('Got some data!'))
.catch((error) => console.log('Bad stuff happened.'));
```

### Stop and search

```
var UKPD = require('ukpd');

const force = 'cheshire';
const date = '2015-11';

UKPD.stopAndSearch(force, date)
.then((data) => console.log('Got some data!'))
.catch((error) => console.log('Bad stuff happened.'));
```

### Availability

```
var UKPD = require('ukpd');

UKPD.availability()
.then((data) => console.log('Got some data!'))
.catch((error) => console.log('Bad stuff happened.'));
```
