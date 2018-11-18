# promise-spread ![Travis](https://img.shields.io/travis/AndreasPizsa/promise-spread.svg?style=flat-square) ![Coverage Status](https://img.shields.io/coveralls/AndreasPizsa/promise-spread.svg?style=flat-square) ![Downloads](https://img.shields.io/npm/dm/promise-spread.svg?style=flat-square)

[![Greenkeeper badge](https://badges.greenkeeper.io/AndreasPizsa/promise-spread.svg)](https://greenkeeper.io/)

> `spread()` for native ES6 Promises

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i promise-spread --save
```

## Usage

#### with `any-promise`

```js
var Promise = require('any-promise');
require('promise-spread')(Promise);
```

#### with native Promises

```js
require('promise-spread');
```

## Alternatives to using `spread()`

ES6 introduces [destructuring](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) and the [rest/spread operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator), which eliminate the need for `spread` outright. ([Kris Kowal](http://stackoverflow.com/questions/22773920/can-promises-have-multiple-arguments-to-onfulfilled#comment34766222_22776850))

```javascript
.then(([a, b, c]) => {});
```

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/AndreasPizsa/promise-spread/issues/new).

## Author

**Andreas Pizsa**

+ [github/AndreasPizsa](https://github.com/AndreasPizsa)
+ [twitter/AndreasPizsa](http://twitter.com/AndreasPizsa)

Based on code by [Benjamin Gruenbaum](https://github.com/benjamingr)'s [answer on StackOverflow](http://stackoverflow.com/a/22776850/199263)

## License

Copyright © 2016 Andreas Pizsa
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on February 04, 2016._