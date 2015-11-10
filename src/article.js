'use strict';

const API = require('./api');

class Article extends API {

  constructor(key, responseType) {
    super(key);
    this.endpoint = 'http://api.nytimes.com/svc/search/v2/articlesearch';
  }

  startDate(date) {
    this.beginDate = date;
    return this;
  }

  endDate(date) {
    this.endDate = date;
    return this;
  }

  query(searchTerm) {
    this.searchTerm = searchTerm;
    return this;
  }

  get() {
    return super.get({
      'q': this.searchTerm,
      'startDate': this.startDate,
      'endDate': this.endDate
    });
  }

}

module.exports = Article;
