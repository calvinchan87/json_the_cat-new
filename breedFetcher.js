const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  let breedQuery = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(breedQuery, (err, body) => {
    if (err !== null) {
      callback(err, null);
      return;
    }

    const data = JSON.parse(body['body']);
    if (data[0] === undefined) {
      callback('Breed name not found', null);
      return;
    }
    callback(null, data[0].description);

  });

};

module.exports = { fetchBreedDescription };


// request(breedQuery, (error, response, body) => {
//   console.log('error:', error);
//   console.log('statusCode:', response && response.statusCode);
//   if (error !== null || response.statusCode !== 200) {
//     (console.log('Terminating app: Error or non-200 result'));
//     return;
//   }
//   const data = JSON.parse(body);
//   if (data[0] === undefined) {
//     console.log('Breed name not found');
//     return;
//   }
//   console.log(data[0].description);
//   // fs.writeFile(args[1], body, function (err) {
//   //   if (err) return console.log(err);
//   //   console.log(`Downloaded and saved ${fs.statSync(args[1]).size} bytes to ${args[1]}`);
//   // })
// });