const request = require('request');


//request youtube API
exports.youtubeAPIRequest = (method, type, part, maxResults, query) => {
const youtubeKey = process.env.YOUTUBEAPIKEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3/";

  let response = {
    BASE_URL: BASE_URL,
    method,
    type,
    youtubeKey: process.env.YOUTUBEAPIKEY,
    part,
    maxResults,
    query,
    order: 'relevance'
  }
  let getUrl = function(res){
    return `${res.BASE_URL}${res.type}?part=${res.part}&q=$${res.q}&maxResults=${res.maxResults}&order=${res.order}&key=${res.youtubeKey}`
  }

  request(getUrl(response), function(error, response, body){
    console.log(response.body);
  })
  console.log(getUrl(response));
}
