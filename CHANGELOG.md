# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.1.0] - 2022-11-24
* Adds support for Node.js 18.x

## [4.0.0] - 2022-05-13
* Removes support for Node.js 12.x (EOL as of April 2022)

## [3.1.1] - 2022-05-13
* Updates dependencies

## [3.1.0] - 2022-01-13
* Add support for Node.js 16.x
* Update dependencies

## [3.0.4] - 2021-09-15
* Updated dependencies

## [3.0.3] - 2021-06-03
* Updated dependencies

## [3.0.2] - 2021-02-26
* Fixes two security vulnerabilities
    * [CVE-2020-15168](https://github.com/advisories/GHSA-w7rc-rwvf-8q5r)
    * [CVE-2020-7789](https://github.com/advisories/GHSA-5fw9-fq32-wv5p)

## [3.0.1] - 2020-07-22
* Fixes two security vulnerabilities
    * [lodash (#1523)](https://www.npmjs.com/advisories/1523)
    * [minimist (#1179)](https://www.npmjs.com/advisories/1179)

## [3.0.0] - 2020-07-02
* Updates `.stopAndSearch` function to take a police force identifier, rather than
latitude and longitude.

Before:
```javascript
await UKPD.stopAndSearch('52.629729', '-1.131592')
```

After:
```javascript
await UKPD.stopAndSearch('cheshire')
```

Police force identifiers can be retrieved by calling `UKPD.forces()`

## [2.0.1] - 2020-07-02
* Fixes a bug where test files were not compiled correctly

## [2.0.0] - 2020-07-02
* Drops support for browsers, focusing solely on Node.js
    * Browser support has been broken for a while and there is currently no
    plans to re-introduce it
* Adds complete type definitions for all methods return types
* Adds examples for all available methods

## [1.4.3] - 2020-07-02
* Adds CHANGELOG, changes are tracked here from now on

## [1.0.0] - 2017-12-06
* First release of the library
