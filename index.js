/*!
 * promise-spread <https://github.com/AndreasPizsa/promise-spread>
 *
 * Based on code by Benjamin Gruenbaum <https://github.com/benjamingr>
 * http://stackoverflow.com/a/22776850/199263
 *
 * Copyright (c) 2016, Andreas Pizsa.
 * Licensed under the MIT License.
 */

'use strict';

function spread(promise) {
  if(!promise) promise = Promise;
  if (promise.prototype.spread) return;

  promise.prototype.spread = function (fn) {
    return this.then(function (args) {
      return Promise.all(args);
    }).then(function(args){
      return fn.apply(this, args);
    });
  };
}

if(Promise) spread();

module.exports = spread;
