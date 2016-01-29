# ukpd

# Usage

`npm install ukpd --save`
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

# TODO
* Currently only the [street-level](https://data.police.uk/docs/method/crime-street/) endpoint is supported, more will be added over time
