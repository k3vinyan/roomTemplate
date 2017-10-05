const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const helpers = require('../helpers');

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
  helpers.youtubeAPIRequest('GET', 'search', 'snippet', 25, 'cat');
  res.redirect(`/rooms/${req.body.id}`);
});

module.exports = router;
