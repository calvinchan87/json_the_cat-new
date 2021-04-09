const request = require('request');

let breed = process.argv[2];

let breedQuery = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;


request(breedQuery, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  if (error !== null || response.statusCode !== 200) {
    (console.log('Terminating app: Error or non-200 result'));
    return;
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('Breed name not found');
    return;
  }
  console.log(data[0].description);
  // fs.writeFile(args[1], body, function (err) {
  //   if (err) return console.log(err);
  //   console.log(`Downloaded and saved ${fs.statSync(args[1]).size} bytes to ${args[1]}`);
  // })
});