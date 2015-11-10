'use strict';

const API = require('./api');

class TopStories extends API {

  constructor(key, responseType) {
    super(key);
    this.endpoint = 'http://api.nytimes.com/svc/topstories/v1/';
    this._section = 'home';
  }

  section(section) {
    this._section = section;
    return this;
  }

  get() {
    this.endpoint = this.endpoint + '/' + this._section;
    return super.get({});
  }

}

module.exports = TopStories;
