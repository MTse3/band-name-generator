'use strict';

// make that word retrieval function
module.exports = function getRandomWord(object) {
  // get all of thoes properties into an array
  var propArray = Object.keys(object);

  // pick a random word from the array
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];

  // return that word in an object
  return {word: randomProp};
};
