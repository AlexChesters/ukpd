'use strict'

const request = require('request')

const baseURL = 'https://data.police.uk/api'

module.exports = function (path) {
  return new Promise(function (resolve, reject) {
    request(`${baseURL}${path}`, function (error, response, body) {
      if (error) { return reject(error) }
      if (response.statusCode !== 200) { return reject({message: `Non-200 status code received: ${response.statusCode}`}) }
      let data
      try {
        data = JSON.parse(body)
      } catch (e) {
        return reject('Invalid JSON')
      }
      return resolve(data)
    })
  })
}
