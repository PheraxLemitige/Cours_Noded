var axios = require("axios").default;
const apikey = "43a891a3"

async function getMovie(title){
  try{
    var options = {
      method: 'GET',
      url: 'http://www.omdbapi.com/',
      params: {s: title, apikey: apikey}
    };
    const result = await axios.request(options);
    return result.data;

  } catch (e){
    console.log(e);
    return next(e);
  }
}

var options = {
  method: 'GET',
  url: 'http://www.omdbapi.com/',
  params: {s: 'The 100', apikey: '43a891a3'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});