'use strict';

const rp = require('request-promise');

class API {

  constructor(key, responseType) {
    this.key = key;
    this.responseType = responseType || 'json';
  }

  get(qs) {
    console.log(qs);
    return rp(this.endpoint + '.' + this.responseType, {
      qs: Object.assign({
        'api-key': this.key
      }, qs)
    });
  }

}

module.exports = API;
