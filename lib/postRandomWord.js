'use strict';

module.exports = function postRandomWord(word, wordObject) {
  //check if the *word* is on the *object*
  if (!wordObject.hasOwnProperty(word)) {
    // if it's NOT on the object, add it and send a message that we added it

    wordObject[word] = true;
    return {message: 'Thanks! We added, ' + word + ', to our vocabulary.'};
  }

  // if it IS on the object, send a polite message saying we have it
  return {message: 'We already have ' + word + ' in our vocabulary. Try another!'};
};
