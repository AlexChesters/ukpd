'use strict'

const request = require('request')

module.exports = (path) => {
  return new Promise((resolve, reject) => {
    request(`https://data.police.uk/api${path}`, (error, response, body) => {
      if (error) { return reject(error) }
      if (response.statusCode !== 200) { return reject({message: `Non-200 status code received: ${response.statusCode}`}) }
      try {
        return resolve(JSON.parse(body))
      } catch (e) {
        return reject('Invalid JSON')
      }
    })
  })
}
