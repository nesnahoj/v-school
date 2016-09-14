// var request = require("request");
//
// request("http://pokeapi.co/api/v1/pokemon/25/", function(error, response, body) {
//   if(error) {
//     console.log("There was an error");
//   }
//   else if(response.statusCode != 200) {
//     console.log("Status code was not 200 it is: " + response.statusCode);
//   } else {
//       var data = JSON.parse(body);
//       console.log(data);
//   }
// });

var request = reuire("request");
request("http//pokeapi.co/api/v1/pokemon/25/", function(error, response, body) {
  if(error) {
    console.log("there was an error");
  } else if(response.statusCode != 200) {
    console.log("Status code was not 200, it is: " + response.statusCode);
  } else {
    var data =JSON.parse(body);
    console.log(data);
  }
});
