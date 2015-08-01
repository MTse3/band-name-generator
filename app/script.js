'use strict';

$(function() {

  $('#name').on('click', function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      $('#adjective').text(adjective);
    });
  });

  $('#name').on('click', function() {
    $.get('verb', function(response) {
      var verb = response.word;
      $('#verb').text(verb);
    });
  });

  $('#name').on('click', function() {
    $.get('noun', function(response) {
      var noun = response.word;
      $('#noun').text(noun);
    });
  });

  $('#adjectiveButton').on('click', function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      $('#adjective').text(adjective);
    });
  });

  $('#verbButton').on('click', function() {
    $.get('verb', function(response) {
      var verb = response.word;
      $('#verb').text(verb);
    });
  });

  $('#nounButton').on('click', function() {
    $.get('noun', function(response) {
      var noun = response.word;
      $('#noun').text(noun);
    });
  });

  //make an event handler that, when the button is clicked
  //sends a POST request to our server
  $('#submitAdjectiveWord').on('submit', function(e) {
    e.preventDefault(); //prevents reload of page
    //get the text entered in the text box and save to a variable
    var adjective = $('input[name=adjective]').val();
    var adjectivePost;

    if (adjective) { //only runs if something is there
      adjectivePost = {word: adjective};

      $.post('adjective', adjectivePost, function(response) {
        var adjectiveRes = response.message;
        $('#adjectiveRes').text(adjectiveRes);
      });
    }
  });

  $('#submitVerbWord').on('submit', function(e) {
    e.preventDefault(); //prevents reload of page
    //get the text entered in the text box and save to a variable
    var verb = $('input[name=verb]').val();
    var verbPost;

    if (verb) { //only runs if something is there
      verbPost = {word: verb};

      $.post('verb', verbPost, function(response) {
        var verbRes = response.message;
        $('#verbRes').text(verbRes);
      });
    }
  });

  $('#submitNounWord').on('submit', function(e) {
    e.preventDefault(); //prevents reload of page
    //get the text entered in the text box and save to a variable
    var noun = $('input[name=noun]').val();
    var nounPost;

    if (noun) { //only runs if something is there
      nounPost = {word: noun};

      $.post('noun', nounPost, function(response) {
        var nounRes = response.message;
        $('#nounRes').text(nounRes);
      });
    }
  });
});
