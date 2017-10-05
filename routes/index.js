const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const youtubeKey = "AIzaSyCe0L76JiEKzBGrrw1ByQHJKLLMD_e3MHg"
const request = require('request');
const BASE_URL = "https://www.googleapis.com/youtube/v3/";

router.get('/', (req, res) => {
  res.render("index");
});

//room routes
router.get('/rooms', roomController.allRooms);
router.get('/rooms/new', roomController.newRoom);
router.post('/rooms/create', roomController.createRoom);
router.get('/rooms/edit', (req, res) =>{res.render("edit");});
router.get('/rooms/:id', roomController.singleRoom);
router.post(`/search`, (req, res)=> {
  let response = {
    BASE_URL: BASE_URL,
    method: 'GET',
    type: 'search?',
    youtubeKey: youtubeKey,
    part: 'snippet',
    maxResults: 25,
    q: 'cat',
    order: 'relevance'
  }
  let getUrl = function(res){
    return `${res.BASE_URL}${res.type}part=${res.part}&q=$${res.q}&maxResults=${res.maxResults}&order=${res.order}&key=${res.youtubeKey}`
  }
  //
  request(getUrl(response), function(error, response, body){
    console.log(response.body);
  })
  console.log(getUrl(res));
  res.redirect(`/rooms/${req.body.id}`);
});

module.exports = router;
