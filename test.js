'strict mode';

const Article = require('./src/article');
const TopStories= require('./src/topStories');

// var article = new Article('');
//
// article
//   .query('Donald Trump')
//   .startDate(new Date())
//   .get()
//   .then(function () {
//     console.log(arguments);
//   });

var topStories = new TopStories('');

topStories
  .section('technology')
  .get()
  .then(function () {
    console.log(arguments);
  });


