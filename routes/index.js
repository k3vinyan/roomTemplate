const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const mongoose = require('mongoose');
const Room = mongoose.model('Room');
const helpers = require('../helpers');

router.get('/', (req, res) => {
  res.render("index");
});

//room routes
router.get('/rooms', roomController.allRooms);
router.get('/rooms/new', roomController.newRoom);
router.post('/rooms/create', roomController.createRoom);
router.get('/rooms/edit', (req, res) =>{res.render("edit");});
router.get('/rooms/:name/:id', roomController.singleRoom);
router.post('/rooms/:id', (req, res)=> {
});

//playlist routes
router.post('/rooms/:roomId/:videoId', roomController.addVideoToRoom)

module.exports = router;
