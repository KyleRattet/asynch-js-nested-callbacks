var fs = require('fs');


fs.readFile('files/start.txt', 'utf8', function (err, data) {
  var sentence = "";


  sentence += data.split('\n')[0] + ' ';
  fs.readFile('files/next.txt', 'utf8', function (err, data) {

  sentence += data.split('\n')[0] + ' ';

    fs.readFile('files/again.txt', 'utf8', function (err, data) {

    sentence += data.split('\n')[0];

    console.log(sentence);

    });

  });

});

