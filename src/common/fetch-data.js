'use strict'

const fetch = require('isomorphic-fetch')

module.exports = async (path) => {
  const response = await fetch(`https://data.police.uk/api${path}`)
  return response.json()
}
