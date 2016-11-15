'use strict'

const fetch = require('node-fetch')

module.exports = (path) => {
  return fetch(`https://data.police.uk/api${path}`).then(res => res.json())
}
